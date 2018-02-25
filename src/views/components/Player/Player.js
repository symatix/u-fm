import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Collapse from 'material-ui/transitions/Collapse';
import Drawer from 'material-ui/Drawer';
import Card, {CardContent, CardMedia} from 'material-ui/Card';
import ReactPlayer from 'react-player';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui-icons/Close';
import ArrowDownward from 'material-ui-icons/ArrowDownward';
import ArrowUpward from 'material-ui-icons/ArrowUpward';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SkipNextIcon from 'material-ui-icons/SkipNext';
import Pause from 'material-ui-icons/Pause';
import './PlayerSlider.css'


const styles = theme => ({
  list: {
    width: 250
  },
  listFull: {
    width: 'auto'
  },
  image: {
    height: '140px',
    width: '140px'
  },
  card: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 151,
    height: 151
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  }
});

class TemporaryDrawer extends React.Component {
  state = {
    playing: true,
    expanded: true,
    played: 0,
    seeking: false
  }
  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0
    })
  }

  handleCollapse = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  }
  onProgress = state => {
    if (!this.state.seeking) {
      this.setState(state)
    }
  }
  onDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration })
  }
  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }
  onSeekChange = e => {
    console.log(this.state.played)
    this.setState({ played: parseFloat(e.target.value) })
  }
  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }
  onClick = e => {
    console.log(parseFloat(e.target.value))
    this.setState({ played: parseFloat(e.target.value) })
  }

  handleClose = () => {
    this.setState({playing: false});
    this
      .props
      .closePlayer();
  }
  togglePlay = () => {
    this.setState({
      playing: !this.state.playing
    })
  }
  ref = player => {
    this.player = player
  }

  renderPlayer() {
    if (this.props.song) {
      const {classes, song} = this.props;
      return (
        <div>
          <Grid container spacing={8}>
            <Grid item xs={8} sm={9} md={10} lg={11}>
              <IconButton aria-label="Previous">
                <SkipPreviousIcon/>
              </IconButton>
              <IconButton aria-label="Play/pause">
                {this.state.playing
                  ? <Pause className={classes.playIcon} onClick={this.togglePlay}/>
                  : <PlayArrowIcon className={classes.playIcon} onClick={this.togglePlay}/>}
              </IconButton>
              <IconButton aria-label="Next">
                <SkipNextIcon/>
              </IconButton>
              <input
                type='range' min={0} max={1} step='any'
                value={this.state.played}
                onMouseDown={this.onSeekMouseDown}
                onChange={this.onSeekChange}
                onMouseUp={this.onSeekMouseUp}
              />
              <ReactPlayer
                ref={this.ref}
                url={this.props.song.url}
                playing={this.state.playing}
                height="0px"
                onProgress={this.onProgress}/>
                
                
            </Grid>
            <Grid item xs={4} sm={3} md={2} lg={1}>
              <IconButton onClick={this.handleCollapse}>
                {this.state.expanded
                  ? <ArrowDownward/>
                  : <ArrowUpward/>
}

              </IconButton>
              <IconButton onClick={this.handleClose}>
                <Close/>
              </IconButton>
            </Grid>

            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <div>
                <Card className={classes.card}>
                  <CardMedia className={classes.cover} image={song.image} title={song.name}/>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography variant="headline">{song.name}</Typography>
                      <Typography variant="subheading" color="textSecondary">
                        {song.artist}
                      </Typography>
                    </CardContent>
                  </div>



                </Card>
              </div>

            </Collapse>

          </Grid>
        </div>
      )
    }
  }

  render() {
    const {open} = this.props;
    return (
      <div>
        <Drawer variant="persistent" anchor="bottom" open={open}>
          {this.renderPlayer()}
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);

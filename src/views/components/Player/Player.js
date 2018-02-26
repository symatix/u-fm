import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Collapse from 'material-ui/transitions/Collapse';
import Drawer from 'material-ui/Drawer';
import Card, {CardContent} from 'material-ui/Card';
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
  container: {
    backgroundColor: '#f5f5f5'
  },
  card: {
    display: 'flex',
    backgroundColor: '#f5f5f5',
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  mainInfo:{
    display:'inline-block',
    margin:'10px'
  },
  flex:{
    display:'inline-block',
    marginTop:'-10px'
  },
  cover: {
    height: '87px',
    width: '87px',
    borderRadius:'2px'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  infoText:{
    borderLeft:'4px solid #607d8b',
    marginLeft:'0.4rem',
    paddingLeft:'0.4rem'
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
    this.setState({url, played: 0, loaded: 0})
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
    this.setState({duration})
  }
  onSeekMouseDown = e => {
    this.setState({seeking: true})
  }
  onSeekChange = e => {
    this.setState({
      played: parseFloat(e.target.value)
    })
  }
  onSeekMouseUp = e => {
    this.setState({seeking: false})
    this
      .player
      .seekTo(parseFloat(e.target.value))
  }
  onClick = e => {
    console.log(parseFloat(e.target.value))
    this.setState({
      played: parseFloat(e.target.value)
    })
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
  playNext = () => {
    const {playlist, song} = this.props;
    let nextIndex = this
      .props
      .playlist
      .indexOf(song) + 1;

      nextIndex = nextIndex >= playlist.length
      ? nextIndex = 0
      : nextIndex;
    this
      .props
      .getStreams(playlist[nextIndex])
  }
  playPrev = () => {
    const {playlist, song} = this.props;
    let prevIndex = this
      .props
      .playlist
      .indexOf(song) - 1;

      prevIndex = prevIndex < 0
      ? prevIndex = playlist.length - 1
      : prevIndex;
    this
      .props
      .getStreams(playlist[prevIndex])
  }
  ref = player => {
    this.player = player
  }

  renderPlayer() {
    if (this.props.song) {
      const {classes, song} = this.props;
      return (
        <div>
          <Grid className={classes.container} container spacing={8}>
            <Grid item xs={8} sm={9} md={10} lg={11}>
              <IconButton aria-label="Previous" onClick={this.playPrev} color="primary">
                <SkipPreviousIcon/>
              </IconButton>
              <IconButton aria-label="Play/pause" color="primary">
                {this.state.playing
                  ? <Pause className={classes.playIcon} onClick={this.togglePlay}/>
                  : <PlayArrowIcon className={classes.playIcon} onClick={this.togglePlay}/>}
              </IconButton>
              <IconButton aria-label="Next" onClick={this.playNext} color="primary">
                <SkipNextIcon/>
              </IconButton>
              <input
                type='range'
                min={0}
                max={1}
                step='any'
                value={this.state.played}
                onMouseDown={this.onSeekMouseDown}
                onChange={this.onSeekChange}
                onMouseUp={this.onSeekMouseUp}/>
              <ReactPlayer
                ref={this.ref}
                url={this.props.song.url}
                playing={this.state.playing}
                height="0px"
                onProgress={this.onProgress}/>

            </Grid>
            <Grid item xs={4} sm={3} md={2} lg={1}>
              <IconButton onClick={this.handleCollapse} color="primary">
                {this.state.expanded
                  ? <ArrowDownward/>
                  : <ArrowUpward/>
}

              </IconButton>
              <IconButton onClick={this.handleClose} color="primary">
                <Close/>
              </IconButton>
            </Grid>

            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <div>
                <Card className={classes.card}>
                  <div>
                  
                    <CardContent className={classes.content}>
                    <img className={classes.cover} src={song.image} alt={song.name}/>
                    <div className={classes.mainInfo} >
                      <Typography variant="headline">{song.name}</Typography>
                      <Typography variant="subheading" color="textSecondary">
                        {song.artist}
                      </Typography>
                      </div>
                    </CardContent>
                    <CardContent className={classes.flex}>
                    <Typography variant="subheading" component="h2">
                      Are You Shpongled? is the first of six albums released by Shpongle. Are You
                      Shpongled? sold in excess of 30,000 copies.
                    </Typography>
                    <Typography variant="body2" className={classes.infoText}>
                      Shpongle is a psychedelic electronic project from England that formed in 1996.
                      The group includes Simon Posford (a.k.a. Hallucinogen) and Raja Ram (one of
                      three in The Infinity Project). The duo are considered to be one of the
                      progenitors of the psybient genre - a genre combining world music with
                      psychedelic trance and ambient. Their musical style combines traditional music
                      from all over the globe and vocals with contemporary western synthesizer-based
                      psychedelic music. When asked to describe Shpongle's music, Posford has
                      responded that it is 'like nothing you've ever heard before.'
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

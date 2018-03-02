import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Collapse from 'material-ui/transitions/Collapse';
import Drawer from 'material-ui/Drawer';
import Grid from 'material-ui/Grid';
import PlayerControls from './PlayerControls';
import PlayerSettings from './PlayerSettings';
import PlayerInfo from './PlayerInfo';

const styles = theme => ({
  container: {
    backgroundColor: '#f5f5f5'
  }
});

class Player extends React.Component {
  state = {
    stop: false,
    expanded: true,
  }

  

  handleCollapse = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  handleClose = () => {
    this.props.closePlayer();
    this.setState({stop: true});
  }

  renderPlayer() {
    if (this.props.song) {
      const {classes, song, activeAlbum, activeArtist} = this.props;
      
      return (
        <div>
          <Grid className={classes.container} container spacing={8}>
            <Grid item xs={8} sm={9} md={10} lg={11}>

              <PlayerControls
                stopPlay={this.state.stop}
                getStreams={this.props.getStreams} 
                song={this.props.song} 
                playlist={this.props.playlist} />

            </Grid>
            <Grid item xs={4} sm={3} md={2} lg={1}>

              <PlayerSettings
                expanded={this.state.expanded}
                handleCollapse={this.handleCollapse.bind(this)}
                handleClose={this.handleClose.bind(this)} />

            </Grid>
            <Grid item xs={12}>

              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <PlayerInfo 
                  albumInfo={activeAlbum.album}
                  artistInfo={activeArtist.artist}
                  playing={song} />
              </Collapse>
            
            </Grid>
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

Player.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps({activeAlbum, activeArtist}){
  return { activeAlbum, activeArtist }
}

export default connect(mapStateToProps)(withStyles(styles)(Player));

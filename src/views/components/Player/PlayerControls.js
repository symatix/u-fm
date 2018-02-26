import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import ReactPlayer from 'react-player';
import IconButton from 'material-ui/IconButton';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SkipNextIcon from 'material-ui-icons/SkipNext';
import Pause from 'material-ui-icons/Pause';
import './PlayerControlsSlider.css'

const styles = theme => ({
  playIcon: {
    height: 38,
    width: 38
  }
});

class TemporaryDrawer extends React.Component {
  state = {
    playing: false,
    played: 0,
    seeking: false
  }

  componentDidMount(){
    this.setState({playing:true})
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.stopPlay === true){
      this.setState({playing:false});
    }
  }

  load = url => {
    this.setState({url, played: 0, loaded: 0})
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
    this.player.seekTo(parseFloat(e.target.value))
  }
  onClick = e => {
    this.setState({
      played: parseFloat(e.target.value)
    })
  }

  togglePlay = () => {
    this.setState({
      playing: !this.state.playing
    })
  }

  playNext = () => {
    const {playlist, song} = this.props;
    let nextIndex = this.props.playlist.indexOf(song) + 1;

    nextIndex = nextIndex >= playlist.length
      ? nextIndex = 0
      : nextIndex;
    this.props.getStreams(playlist[nextIndex])
  }
  playPrev = () => {
    const {playlist, song} = this.props;
    let prevIndex = this.props.playlist.indexOf(song) - 1;

    prevIndex = prevIndex < 0
      ? prevIndex = playlist.length - 1
      : prevIndex;
    this.props.getStreams(playlist[prevIndex])
  }
  ref = player => {
    this.player = player
  }

  render() {
    const {classes, song} = this.props;

    return (
      <div>
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
          url={song.url}
          playing={this.state.playing}
          height="0px"
          onProgress={this.onProgress}/>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);

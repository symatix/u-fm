import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {withStyles} from 'material-ui/styles';
import AppHeader from '../AppHeader';
import AppContent from '../AppContent';
import Player from '../Player';
import { getStreams, getPlaylist } from '../../../core/actions/playingActions';
import { searchResults } from '../../../core/actions/searchActions';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
    width: "100%"
  }
});

class AppMain extends React.Component {
  state = {
    value: 0,
    player:false,
    search:false
  };

  handleChange = (value) => {
    this.setState({value, search: false});
  };

  handleChangeIndex = index => {
    this.setState({value: index});
  };

  activateSearch() {
    this.setState({search:!this.state.search, value:3});
  }

  closePlayer() {
    this.setState({player: false})
  }
  openPlayer() {
    this.setState({player: true})
  }

  render() {
    const {classes, theme, searchResults} = this.props;

    const contentData = [{
      view:"playlist",
      data: this.props.playlists,
      tracks: this.props.playlists[0].trackList
    },{
      view:"artists",
      data: this.props.artists,
      tracks: this.props.artists[0].albums.trackList
    },{
      view:"albums",
      data: this.props.albums,
      tracks: this.props.albums[0].trackList
    },{
      view:"tracks",
      data: this.state.search ? this.props.activePlaylist : this.props.tracks,
      tracks: this.state.search ? this.props.activePlaylist : this.props.tracks
    }]
    
    return (
      <div className={classes.root}>

        <AppHeader 
          db={this.props.tracks} 
          search={searchResults} 
          activate={this.activateSearch.bind(this)}
          value={this.state.value}
          handleChange={this.handleChange.bind(this)}
        />

        <AppContent 
          axis={theme.direction === 'rtl'
            ? 'x-reverse'
            : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex.bind(this)}
          playing={this.props.playing} 
          openPlayer={this.openPlayer.bind(this)} 
          dir={theme.direction}
          data={contentData}
          getStreams={this.props.getStreams}
          getPlaylist={this.props.getPlaylist}
        />

        <Player 
          db={this.props.info}
          open={this.state.player} 
          getStreams={this.props.getStreams} 
          closePlayer={this.closePlayer.bind(this)} 
          song={this.props.playing} 
          playlist={this.props.activePlaylist} 
        />

      </div>
    );
  }
}

AppMain.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const App = withStyles(styles, {withTheme: true})(AppMain);

function mapStateToProps(store){
  return store;
}

export default connect(mapStateToProps, {getStreams, getPlaylist, searchResults})(App);

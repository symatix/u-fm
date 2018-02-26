import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {withStyles} from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import AppHeader from '../AppHeader';
import ListView from '../ListView';
import Player from '../Player';
import { getStreams, searchResults } from '../../../core/init/actions/playingActions';

function TabContainer({children, dir}) {
  return (
    <Typography component="div" dir={dir} style={{
      padding: 8 * 3
    }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
    width: "100%"
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
    player:false,
    search:false
  };

  handleChange = (event, value) => {
    this.setState({value, search: false});
  };

  handleChangeIndex = index => {
    this.setState({value: index});
  };

  activateSearch() {
    this.setState({search:!this.state.search, value:3});
  }

  closePlayer() {
    this.setState({player:false})
  }
  openPlayer() {
    this.setState({player: true})
  }

  render() {
    const {classes, theme, searchResults} = this.props;
    
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <AppHeader db={this.props.tracks} search={searchResults} activate={this.activateSearch.bind(this)}/>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
            fullWidth>
            <Tab label="Playlist"/>
            <Tab label="Artists"/>
            <Tab label="Albums"/>
            <Tab label="Tracks"/>
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl'
          ? 'x-reverse'
          : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}>
          <TabContainer dir={theme.direction}><ListView playing={this.props.playing} openPlayer={this.openPlayer.bind(this)} data={this.props.playlists} tracks={this.props.playlists[0].trackList} view="playlist"/></TabContainer>
          <TabContainer dir={theme.direction}><ListView playing={this.props.playing} openPlayer={this.openPlayer.bind(this)} data={this.props.artists} tracks={this.props.artists[0].albums.trackList} view="artists"/></TabContainer>
          <TabContainer dir={theme.direction}><ListView playing={this.props.playing} openPlayer={this.openPlayer.bind(this)} data={this.props.albums} tracks={this.props.albums[0].trackList} view="albums"/></TabContainer>
          <TabContainer dir={theme.direction}><ListView playing={this.props.playing} openPlayer={this.openPlayer.bind(this)} data={this.state.search ? this.props.activePlaylist : this.props.tracks} tracks={this.state.search ? this.props.activePlaylist : this.props.tracks} view="tracks"/></TabContainer>
        </SwipeableViews>
        <Player open={this.state.player} getStreams={this.props.getStreams} closePlayer={this.closePlayer.bind(this)} song={this.props.playing} playlist={this.props.activePlaylist} />
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const App = withStyles(styles, {withTheme: true})(FullWidthTabs);

function mapStateToProps(store){
  return store;
}

export default connect(mapStateToProps, {getStreams, searchResults})(App);

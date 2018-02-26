import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import Typography from 'material-ui/Typography';
import ListView from '../ListView';

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

class AppContent extends React.Component {

  handleChangeIndex = index => {
    this.props.onChangeIndex(index);
  };

  renderContent(){
    const { dir, playing, openPlayer } = this.props;

    return this.props.data.map((content, i) => {
      return (
        <TabContainer key={`${i}-${content.name}`} dir={dir}>
          <ListView 
            playing={playing} 
            openPlayer={openPlayer} 
            getStreams={this.props.getStreams}
            getPlaylist={this.props.getPlaylist}
            {...content}/>
        </TabContainer>
      )
    })
  }

  render() {
    const { axis, index } = this.props;
  
    return (
        <SwipeableViews
          axis={axis}
          index={index}
          onChangeIndex={this.handleChangeIndex}>
          {this.renderContent()}
        </SwipeableViews>
    );
  }
}

export default AppContent;

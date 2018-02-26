import React from 'react';
import Tabs, {Tab} from 'material-ui/Tabs';


class AppHeaderNav extends React.Component {

    handleChange = (event, value) => {
    this.props.handleChange(value);
  };


  render() {
    const {value} = this.props;
    
    return (
      <Tabs
        value={value}
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
    );
  }
}

export default AppHeaderNav;
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Tabs, {Tab} from 'material-ui/Tabs';

function AppHeaderTabs(props) {
  return (

    <Tabs
        value={this.props.value}
        onChange={this.props.handleChange}
        indicatorColor="primary"
        textColor="primary"
        fullWidth>
      <Tab label="Item One"/>
      <Tab label="Item Two"/>
      <Tab label="Item Three"/>
    </Tabs>
  );
}

export default AppHeaderTabs;

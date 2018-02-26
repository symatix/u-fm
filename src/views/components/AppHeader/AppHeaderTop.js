import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import AppHeaderSearch from './AppHeaderSearch';
import AppHeaderMenu from './AppHeaderMenu';
import AppHeaderLogo from './AppHeaderLogo';

const styles = {
  root: {
    flexGrow: 1
  },
  appName:{
    display:'inline-block'
  }
};

function AppHeaderTop(props) {
  const {classes, db, search, activate} = props;
  return (
    <Toolbar>
        <AppHeaderLogo />
        <AppHeaderSearch db={db} search={search} activate={activate}/>
        <AppHeaderMenu/>
        <Typography variant="subheading" color="primary" className={classes.appName}>
          U|FM
        </Typography>
    </Toolbar>
  );
}

AppHeaderTop.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppHeaderTop);

import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui-icons/Search';
import AppHeaderMenu from './AppHeaderMenu';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  logo:{
    width:'4rem',
    height:'3rem'
  }
};

function AppHeader(props) {
  const {classes} = props;
  return (
    <Toolbar>
      <div className={classes.flex}>
        <img className={classes.logo} src="/images/yammat-2018-logo-black.png" alt="" />
      </div>
      <Typography variant="title" color="primary" className={classes.flex}>
        U.FM
      </Typography>
      <IconButton className={classes.menuButton} color="inherit" aria-label="Search" color="primary" >
        <Search/>
      </IconButton>
        <AppHeaderMenu/>
    </Toolbar>
  );
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppHeader);

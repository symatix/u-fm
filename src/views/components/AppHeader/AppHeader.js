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
  }
};

function AppHeader(props) {
  const {classes} = props;
  return (
    <Toolbar>
      <Typography variant="title" color="inherit" className={classes.flex}>
        U.FM
      </Typography>
      <IconButton className={classes.menuButton} color="inherit" aria-label="Search">
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

import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import AppHeaderSearch from './AppHeaderSearch';
import AppHeaderMenu from './AppHeaderMenu';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  inline:{
    display:'inline-block'
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
  const {classes, db, search, activate} = props;
  return (
    <Toolbar>
      <div className={classes.flex}>
        <img className={classes.logo} src="/images/yammat-2018-logo-black.png" alt="" />
      </div>
        <AppHeaderSearch db={db} search={search} activate={activate}/>
        <AppHeaderMenu/>
        <Typography variant="subheading" color="primary" className={classes.inline}>
          U|FM
        </Typography>
    </Toolbar>
  );
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppHeader);

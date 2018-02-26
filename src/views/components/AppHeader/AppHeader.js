import React from 'react';
import AppBar from 'material-ui/AppBar';
import AppHeaderTop from './AppHeaderTop';
import AppHeaderNav from './AppHeaderNav';

class AppHeader extends React.Component {

  render() {
    const {db, search, activate, value, handleChange } = this.props;
    
    return (
      <AppBar position="static" color="default">
      
        <AppHeaderTop
          db={db}
          search={search}
          activate={activate}/>

        <AppHeaderNav 
          value={value} 
          handleChange={handleChange}/>

      </AppBar>
    );
  }
}

export default AppHeader;
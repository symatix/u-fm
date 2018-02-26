import React from 'react';

const styles = {
  flex: {
    flex: 1
  },
  logo:{
    width:'4rem',
    height:'3rem'
  }
};

function AppHeaderLogo(props) {
  return (
      <div style={styles.flex}>
        <img style={styles.logo} src="/images/yammat-2018-logo-black.png" alt="" />
      </div>
  );
};

export default AppHeaderLogo;
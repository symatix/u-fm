import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';

const options = [
  'Profile',
  'Settings',
  'Night Mode'
];

const ITEM_HEIGHT = 48;

class AppHeaderMenu extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  renderOptions = () => {
    return options.map(option => {
      return (
        <MenuItem key={option} onClick={this.handleClose}>
          {option}
        </MenuItem>
      )
    })
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          color="primary"
          aria-label="More"
          aria-owns={anchorEl ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            }
          }}>
          {this.renderOptions()}
        </Menu>
      </div>
    );
  }
}

export default AppHeaderMenu;
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {ListItem, ListItemText, ListItemIcon} from 'material-ui/List';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';

const styles = theme => ({
    listItem: {
        borderBottom: '1px solid lightgrey'
    },
    listImage: {
        width: '2rem',
        height: '2rem',
        borderRadius: '50%'
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4
    }
});

class ListItemCustom extends Component {

    handleButton = (tracks) => {
        const { data } = this.props;
        if (data.url) {
            return this.props.playSong(data, tracks, true);
        }
        return this.props.toggleSubList();
    }

    renderImage = () => {
        const { classes, data } = this.props;

        if (data.image) {
            return (
                <ListItemIcon>
                    <img 
                        src={data.image} 
                        alt="" 
                        className={classes.listImage}/>
                </ListItemIcon>
            )
        }
    }

    render() {
        const { classes, subItem, data, count, playing, tracks } = this.props;
        
        return (
            <ListItem 
                className={subItem 
                    ? `${classes.nested} ${classes.listItem}` 
                    : classes.listItem}
                button
                onClick={() => this.handleButton(tracks)}>
                {this.renderImage()}
                <ListItemText primary={data.name}/>
                {playing === data ? <PlayArrowIcon />:""} 
                {count}
            </ListItem>
        )
    }
}
ListItemCustom.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ListItemCustom);
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
    wrapper:{
        position:'relative',
        width:"100%",
    },
    right:{
        textAlign:'right'
    },
    center:{
        textAlign:'center'
    },
    button: {
        margin: theme.spacing.unit,
        border: '1px solid ' + theme.palette.primary.light
    },
    buttonRight: {
        alighSelf:'right',
        margin: theme.spacing.unit,
        border: '1px solid ' + theme.palette.primary.light
    },
    input: {
        display: 'none'
    }
});

function ActionButton(props) {

    const position = () => {
        switch (props.position){
            case 'right':
            return `${classes.wrapper} ${classes.right}`;
            case 'center':
            return `${classes.wrapper} ${classes.center}`
            default:
            return;
        }
    }
    const {classes, right} = props;
    return (
        <div className={position ? position() : classes.wrapper}>
            <Button color="primary" className={classes.button}>
                Add
            </Button>
        </div>
    );
}

ActionButton.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ActionButton);
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    basic: {
        marginLeft:'1rem'
    }
});

class PlayerInfoBasic extends React.Component {

    render() {
        const {classes, artist, album, name} = this.props;

        return (
            <div className={classes.basic}>
                <Typography variant="headline">{name}</Typography>
                <Typography variant="subheading" color="textSecondary">
                    {artist} | {album}
                </Typography>
            </div>
        );
    }
}

PlayerInfoBasic.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PlayerInfoBasic);

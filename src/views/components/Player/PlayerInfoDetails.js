import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    basic: {
        marginLeft:'1rem'
    },
    infoText: {
        borderLeft: '4px solid #607d8b',
        marginLeft: '0.4rem',
        paddingLeft: '0.4rem'
    }
});

class PlayerInfoDetails extends React.Component {

    render() {
        const {classes, artist, members, published, summary } = this.props;

        return (
            <div className={classes.basic}>
                <Typography variant="subheading" component="h2">
                    {summary}
                </Typography>
                <Typography variant="body2" className={classes.infoText}>
                    PUBLISHED | <strong>{published}</strong>
                </Typography>
                <Typography variant="body2" className={classes.infoText}>
                    {artist.toUpperCase()} | <strong>{members.toString()}</strong>
                </Typography>
            </div>
        );
    }
}

PlayerInfoDetails.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PlayerInfoDetails);

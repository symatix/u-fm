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
    renderPublished(){
        const { classes, published } = this.props;
        if (published) {
            return (
                <Typography variant="body2" className={classes.infoText}>
                    <strong>PUBLISHED</strong> |&nbsp;
                    {published ? published : 'No data present'}
                </Typography>
            )
        }
    }

    renderSummary(){
        const { classes, summary } = this.props;
        if(summary){
            return(
                <Typography variant="body2" className={classes.infoText}>
                    <strong>ALBUM SUMMARY</strong> |&nbsp;
                    {summary.substring(0, summary.indexOf(" <a href")) + '.'}
                </Typography>
            )
        }
    }

    render() {
        return (
            <div className={this.props.classes.basic}>
                {this.renderPublished()}
                {this.renderSummary()}
            </div>
        );
    }
}

PlayerInfoDetails.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PlayerInfoDetails);

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import PlayerInfoBasic from './PlayerInfoBasic';
import PlayerInfoDetails from './PlayerInfoDetails';

const styles = theme => ({
    cover: {
        height: '87px',
        width: '87px',
        borderRadius: '2px'
    }
});

class PlayerInfo extends React.Component {
    renderInfo(){
        const {classes, playing, albumInfo, artistInfo} = this.props;

        if (!_.isEmpty(albumInfo) && !_.isEmpty(artistInfo)){
            return (
                <Grid container spacing={8}>
                    <Grid item xs={5} sm={3} md={2} lg={1}>
                        {albumInfo.image[2]['#text'] 
                        ? <img className={classes.cover} src={albumInfo.image[2]['#text']} alt={playing.name}/>       
                        : ''}
                    </Grid>

                    <Grid item xs={7} sm={9} md={3} lg={3}>
                        <PlayerInfoBasic {...playing} />
                    </Grid>

                    <Grid item xs={12} sm={12} md={7} lg={8}>
                        {this.props.playing.type !== 'stream' 
                        ? <PlayerInfoDetails 
                            artist={artistInfo.name} 
                            published={albumInfo.wiki ? albumInfo.wiki.published : null} 
                            summary={albumInfo.wiki ? albumInfo.wiki.summary : null}
                             />
                        :''}
                    </Grid>

                </Grid>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderInfo()}
            </div>
        );
    }
}

PlayerInfo.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PlayerInfo);

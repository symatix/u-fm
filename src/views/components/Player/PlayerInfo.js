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

    getArtist = () => {
        return _.find(this.props.db, ['artist', this.props.playing.artist]);
    }
    getAlbumData = () => {
        if (this.props.playing.type === 'stream') {
            return null;
        }
        const artistData = _.find(this.props.db, ['artist', this.props.playing.artist])

        return _.find(artistData.albums, ['name', this.props.playing.album]);
    }

    render() {
        const {classes, playing} = this.props;

        const artist = this.getArtist();
        return (
                <Grid container spacing={8}>
                    <Grid item xs={5} sm={3} md={2} lg={1}>

                        <img className={classes.cover} src={playing.image} alt={playing.name}/>

                    </Grid>
                    <Grid item xs={7} sm={9} md={3} lg={3}>

                        <PlayerInfoBasic {...playing} />

                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={8}>
                {this.props.playing.type !== 'stream' ? <PlayerInfoDetails artist={playing.artist} members={artist 
                        ? artist.members
                        : null} {...this.getAlbumData()} />
                :''}
                        

                    </Grid>
                </Grid>
        );
    }
}

PlayerInfo.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PlayerInfo);

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

    findInfo = () => {
        return this.props.db.find(({artist}) => artist === this.props.playing.artist);
    }
    getAlbumData = () => {
        const album = this.props.db.map(artist => {
            return artist.albums.find(({name}) => name === this.props.playing.album);
        })
        return album[0];
    }

    render() {
        const {classes, playing} = this.props;

        return (
                <Grid container spacing={8}>
                    <Grid item xs={5} sm={3} md={2} lg={1}>

                        <img className={classes.cover} src={playing.image} alt={playing.name}/>

                    </Grid>
                    <Grid item xs={7} sm={9} md={3} lg={3}>

                        <PlayerInfoBasic {...playing} />

                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={8}>

                        <PlayerInfoDetails
                            artist={playing.artist}
                            members={this.findInfo().members}
                            {...this.getAlbumData()} />

                    </Grid>
                </Grid>
        );
    }
}

PlayerInfo.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PlayerInfo);

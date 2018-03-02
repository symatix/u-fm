import axios from 'axios';
import { GET_ARTIST_INFO, GET_ALBUM_INFO } from '../constants';
import conf from '../conf';

export const getArtistInfo = (artist) => async dispatch => {
    const artistInfo = await axios
        .get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${conf.LAST_FM_API_KEY}&format=json`);
	dispatch({ type: GET_ARTIST_INFO, payload: artistInfo.data });
};

export const getAlbumInfo = (artist, album) => async dispatch => {
    const albumInfo = await axios
        .get(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${conf.LAST_FM_API_KEY}&artist=${artist}&album=${album}&format=json`);

    dispatch({ type: GET_ALBUM_INFO, payload: albumInfo.data });
}

    


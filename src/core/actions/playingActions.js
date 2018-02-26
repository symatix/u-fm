import { GET_SONG, GET_PLAYLIST } from '../constants';

export const getStreams = (song) => {
	return { type: GET_SONG, payload: song };
};

export const getPlaylist = (playlist) => {
	return { type: GET_PLAYLIST, payload: playlist };
};
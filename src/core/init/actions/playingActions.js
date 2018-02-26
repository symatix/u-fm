import { GET_SONG, GET_PLAYLIST, SET_SEARCH_RESULTS } from '../../constants';

export const getStreams = (song) => {
	return { type: GET_SONG, payload: song };
};

export const getPlaylist = (playlist) => {
	return { type: GET_PLAYLIST, payload: playlist };
};

export const searchResults = (searchResults) => {
	return { type: SET_SEARCH_RESULTS, payload: searchResults }
}
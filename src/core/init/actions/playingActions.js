import { GET_SONG } from '../../constants';

export const getStreams = (song) => {
	return { type: GET_SONG, payload: song };
};
import { GET_ARTIST_INFO } from '../constants';


export default function (state = {}, action) {

	switch (action.type) {
	case GET_ARTIST_INFO:
    return action.payload;
    
	default:
		return state
	}
}
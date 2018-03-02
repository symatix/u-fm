import { GET_ALBUM_INFO } from '../constants';


export default function (state = {}, action) {

	switch (action.type) {
    case GET_ALBUM_INFO:
    return action.payload;
    
	default:
		return state
	}
}
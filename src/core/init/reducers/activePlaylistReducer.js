import { GET_PLAYLIST, SET_SEARCH_RESULTS } from '../../constants';


export default function (state = [], action) {

	switch (action.type) {
	case GET_PLAYLIST:
	return action.payload;
	
	case SET_SEARCH_RESULTS:
        return action.payload;
        
	default:
		return state
	}
}
import { GET_SONG } from '../../constants';

export default function (state = null, action) {

	switch (action.type) {
	case GET_SONG:
        return action.payload;
        
	default:
		return state
	}
}
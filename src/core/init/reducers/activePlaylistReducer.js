export default function (state = [], action) {

	switch (action.type) {
	case 'GET_PLAYLIST':
        return action.payload;
        
	default:
		return state
	}
}
import { combineReducers } from 'redux'
import artistReducer from './reducers/artistReducer';
import albumReducer from './reducers/albumReducer';
import playlistReducer from './reducers/playlistReducer';
import trackReducer from './reducers/trackReducer';
import infoReducer from './reducers/infoReducer';
import playingReducer from './reducers/playingReducer';
import activePlaylistReducer from './reducers/activePlaylistReducer';

export default combineReducers({
	artists: artistReducer,
	playlists: playlistReducer,
	albums:albumReducer,
    tracks:trackReducer,
	info:infoReducer,
	playing:playingReducer,
	activePlaylist:activePlaylistReducer
});
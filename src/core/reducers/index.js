import { combineReducers } from 'redux'
import artistReducer from './artistReducer';
import albumReducer from './albumReducer';
import streamReducer from './streamReducer';
import playlistReducer from './playlistReducer';
import trackReducer from './trackReducer';
import infoReducer from './infoReducer';
import playingReducer from './playingReducer';
import activePlaylistReducer from './activePlaylistReducer';

export default combineReducers({
	artists: artistReducer,
	playlists: playlistReducer,
	streams: streamReducer,
	albums:albumReducer,
    tracks:trackReducer,
	info:infoReducer,
	playing:playingReducer,
	activePlaylist:activePlaylistReducer
});
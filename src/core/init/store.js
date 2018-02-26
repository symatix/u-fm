import playlists from './store/playlists';
import artists from './store/artists';
import albums from './store/albums';
import tracks from './store/tracks';
import info from './store/info';


//const LASTFM_API = '4e2f4e2e837a911c28ede35518f9990a';


export default {
	playlists,
	albums,
	tracks,
	artists,
	info,
	playing:null,
	activePlaylist:[],		
}


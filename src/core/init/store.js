import activePlaylist from './store/activePlaylist';
import playlists from './store/playlists';
import streams from './store/streams';
import artists from './store/artists';
import albums from './store/albums';
import tracks from './store/tracks';

export default {
	playlists,
	streams,
	albums,
	tracks,
	artists,
	activePlaylist,
	activeAlbum:{},
	activeArtist:{},
	playing:null,		
}


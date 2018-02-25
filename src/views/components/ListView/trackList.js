export default function (view = null, data) {

    switch (view) {
        case 'playlist':
            return data.trackList;
        case 'artists':
            return data.albums.trackList;
        case 'albums':
            return data.trackList;
        case 'tracks':
            return null;

        default:
            return view
    }
}
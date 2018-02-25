export default function (view = null, data) {

    switch (view) {
        case 'playlist':
            return data.trackList.length;
        case 'artists':
            return data.albums.trackList.length;
        case 'albums':
            return data.trackList.length;
        case 'tracks':
            return null;

        default:
            return view
    }
}
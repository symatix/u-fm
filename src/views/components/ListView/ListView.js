import React, {Component} from 'react';
import List from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import ListItem from './ListItem';
import count from './count';

class ListView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subList: false
        }
        this.handleButton = this.handleButton.bind(this);
        this.togglePlayer = this.togglePlayer.bind(this);
        this.toggleSubList = this.toggleSubList.bind(this);
    }

    componentDidMount() {
        const { data } = this.props;
        data.map((data, i) => {
            if (data.trackList || data.albums) {
                return this.setState({[data.name]:false})
            }
            return false;
        })
    }

    getPlaylist() {

    }

    handleButton(song, playlist, play) {
        if (this.props.view === 'tracks' || play) {
            this.props.openPlayer();
            this.props.getPlaylist(playlist)
            return this.props.getStreams(song);
        }
        return this.toggleSubList();
    }

    togglePlayer(song) {
        this.setState({ 
            player: !this.state.player,
            song
        })
    }
    toggleSubList(state) {
        this.setState({
            [state]: !this.state[state]
        })
    }

    renderList() {
        const {data} = this.props;
        
        return data.map((list, i) => {
            let tracks = list.trackList;

            if (list.albums) {
                tracks = list.albums.trackList;
            }
            if(list.url) {
                tracks = data;
            }
            return (
                <div key={`${i}-${data.name}`}>
                    <ListItem
                        tracks={tracks}
                        data={list}
                        subItem={false}
                        count={count(this.props.view, list)}
                        playSong={this.handleButton}
                        toggleSubList={() => this.toggleSubList(list.name)}
                        playing={this.props.playing} />
                        
                    {tracks ? tracks.map((track, i) => (
                        <Collapse key={`${i}-sub-${track.name}`} in={this.state[list.name]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem
                                    tracks={tracks}
                                    data={track}
                                    subItem={true}
                                    playSong={this.handleButton}
                                    playing={this.props.playing} />
                            </List>
                        </Collapse>
                    )) : ''}
                </div>
            )
        })
    }

    render() {
        return (
            <List component="nav">
                {this.renderList()}
            </List>
        )
    }
}


export default ListView;
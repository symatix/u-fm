import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withStyles} from 'material-ui/styles';
import List, {ListItem, ListItemText, ListItemIcon} from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import {getStreams, getPlaylist} from '../../../core/init/actions/playingActions';
import count from './count';

const styles = theme => ({
    root: theme
        .mixins
        .gutters({
            paddingTop: 16,
            paddingBottom: 16,
            marginTop: theme.spacing.unit * 3,
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper
        }),
    listItem: {
        borderBottom: '1px solid lightgrey'
    },
    listImage: {
        width: '2rem',
        height: '2rem',
        borderRadius: '50%'
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4
    }
});

class ListItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: false,
            subList: false,
            song: null
        }
        this.togglePlayer = this
            .togglePlayer
            .bind(this);
        this.toggleSubList = this
            .toggleSubList
            .bind(this);
    }

    handleButton(song, play) {
        if (this.props.view === 'tracks' || play) {
            this
                .props
                .openPlayer();
            this.props.getPlaylist(this.props.tracks)
            return this
                .props
                .getStreams(song);
        }
        return this.toggleSubList();
    }

    togglePlayer(song) {
        this.setState({
            player: !this.state.player,
            song
        })
    }
    toggleSubList() {
        this.setState({
            subList: !this.state.subList
        })
    }

    renderList() {
        const {classes} = this.props;
        
        return this
            .props
            .data
            .map((data, i) => {
                return (
                    <div key={data.name + i}>
                        <ListItem
                            className={classes.listItem}
                            button
                            onClick={() => this.handleButton(data)}>
                            {data.image
                                ? <img src={data.image} alt="" className={classes.listImage}/>
                                : ''}
                            <ListItemText primary={data.name}/>
                            
                            {this.props.playing === data ? <PlayArrowIcon />:""} 
                            {count(this.props.view, data)}
                            
                        </ListItem>
                    </div>
                )
            })
    }
    renderSubList() {
        const {classes, tracks} = this.props;
        return tracks.map(track => {
            return (
                <ListItem
                    key={track.url}
                    button
                    className={`${classes.nested} ${classes.listItem}`}
                    onClick={() => this.handleButton(track, true)}>
                    <ListItemIcon>
                        <img src={track.image} alt="" className={classes.listImage}/>
                    </ListItemIcon>
                    <ListItemText inset primary={track.name}/>
                    {this.props.playing === track ? <PlayArrowIcon />:""}
                </ListItem>
            )
        })
    }

    render() {

        return (
            <List component="nav">
                {this.renderList()}

                <Collapse in={this.state.subList} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {this.renderSubList()}
                    </List>
                </Collapse>
            </List>
        )
    }
}

ListItems.propTypes = {
    classes: PropTypes.object.isRequired
};
const ListView = withStyles(styles)(ListItems)

export default connect(null, {getStreams, getPlaylist})(ListView);
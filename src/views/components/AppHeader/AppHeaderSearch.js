import _ from 'lodash';
import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper/Paper';
import {FormControl} from 'material-ui/Form';
import Input, {InputAdornment} from 'material-ui/Input';
import Search from 'material-ui-icons/Search';


const styles = theme => ({
    searchBox: {
        width: '250px',
        paddingTop: '5px',
        boxShadow: 'none',
        transition: 'all linear .2s'
    },
    searchBoxActive: {
        backgroundColor:'#E0E0E0',
        width: '300px',
        paddingTop: '5px',
        boxShadow: 'none',
        transition: 'all linear .2s'
    },
    input: {
        paddingLeft: '15px'
    }
});

class AppHeaderSearch extends Component {
    state = {
        query: '',
        active: false
    }

    handleChange = event => {
        this.setState({query: event.target.value})
        this.activateSearch(event.target.value);
    }

    activateSearch = query => {
        var regexp = new RegExp(query, "gi");
        let newPlaylist = _.filter(this.props.db, 
            (obj) => regexp.test(obj.name) || regexp.test(obj.artist));
        newPlaylist = _.uniqWith(newPlaylist, _.isEqual);

        this.props.search(newPlaylist);
    }

    onFocusSearch = event => {
        this.props.activate();
        this.setState({active: true});
    }

    onBlurSearch = event => {
        this.setState({active: false, query:''});
    }
    
    render() {
        const {classes} = this.props;
        return (
            <Paper
                className={this.state.active
                    ? classes.searchBoxActive
                    : classes.searchBox}
                onClick={this.onFocusSearch}>
                <FormControl fullWidth className={classes.formControl}>
                    <Input
                        className={classes.input}
                        disableUnderline={true}
                        id="searchbox-input"
                        placeholder="Search..."
                        value={this.state.query}
                        onChange={this.handleChange}
                        onBlur={this.onBlurSearch}
                        endAdornment={
                            <InputAdornment position = "end" style = {{margin:'auto 5px'}}>
                                <Search/>
                            </InputAdornment>
                        }/>
                </FormControl>
            </Paper>
        );
    }
}

export default withStyles(styles)(AppHeaderSearch);
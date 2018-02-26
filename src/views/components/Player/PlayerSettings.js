import React from 'react';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui-icons/Close';
import ArrowDownward from 'material-ui-icons/ArrowDownward';
import ArrowUpward from 'material-ui-icons/ArrowUpward';

class PlayerSettings extends React.Component {

    render() {
        const {handleCollapse, handleClose} = this.props;
        return (
            <div>
                <IconButton onClick={handleCollapse} color="primary">
                    {this.props.expanded
                        ? <ArrowDownward/>
                        : <ArrowUpward/>}
                </IconButton>
                <IconButton onClick={handleClose} color="primary">
                    <Close/>
                </IconButton>
            </div>
        );
    }
}

export default PlayerSettings;

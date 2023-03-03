import React, { Component } from 'react';
import LogsComp from '../../Components/Component/Form/LogsComp/LogsComp';

export default class LogView extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id='logView'>
                <LogsComp changeActiveUser={this.props.changeActiveUser} />
            </div>
        )
    }
}

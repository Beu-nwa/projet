import React, { Component } from 'react';
import NavBarComp from '../../GlobalComponent/NavBarComp/NavBarComp'


class HeaderComp extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <header>
                <NavBarComp activeUser={this.props.activeUser} changeActiveUser={this.props.changeActiveUser} />
            </header>
        );
    }
}

export default HeaderComp;

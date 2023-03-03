import React, { Component } from 'react';
import LoginComp from '../LoginComp/LoginComp';
import SignInComp from '../SignInComp/SignInComp';
import './LogsComp.css';

export default class LogsComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: true,
        }
    }
    changeIsActive = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }
    render() {
        return this.state.isActive ? (
            <div className='row justify-content-center gx-0'>
                <div className='col col-sm-11 col-md-8 col-lg-5 col-xl-4 col-xxl-3 my-4'>
                    <LoginComp changeActiveUser={this.props.changeActiveUser} changeIsActive={this.changeIsActive} />
                </div>
            </div>
        ) : (
            <div className='row justify-content-center gx-0'>
                <div className='col col-sm-11 col-md-8 col-lg-6 col-xl-4 col-xxl-3 my-4 mx-auto'>
                    <SignInComp changeIsActive={this.changeIsActive} />
                </div >
            </div>
        )
    }
}

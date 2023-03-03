import React, { Component } from 'react';
import { Users } from '../../../../datas/Users.js';

export default class LoginComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
        }
    }
    changeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }
    changePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }
    checkUser = () => {
        let logedUser = Users.filter(user => {
            return user.mail === this.state.email && user.mdp === this.state.password
        })
        if (logedUser.length !== 0) {
            this.props.changeActiveUser(logedUser);
            alert("connecté");
            return (
                document.getElementById('mailInput').classList.remove("border-danger"),
                document.getElementById('passwordInput').classList.remove("border-danger")
            )
        } else {
            let userMail = Users.filter(user => {
                return user.mail === this.state.email
            })
            if (userMail.length !== 0) {
                return (
                    document.getElementById('mailInput').classList.remove("border-danger"),
                    document.getElementById('passwordInput').classList.add("border-danger"),
                    document.getElementById('passwordAlert').classList.remove("d-none"),
                    this.displayTime()
                )
            } else {
                return (
                    document.getElementById('passwordInput').classList.remove("border-danger"),
                    document.getElementById('mailInput').classList.add("border-danger"),
                    document.getElementById('mailAlert').classList.remove("d-none"),
                    this.displayTime()
                )
            }
        }
    }
    displayTime = () => {
        setTimeout(() => {
            return (document.getElementById('mailAlert').classList.add("d-none"),
                document.getElementById('passwordAlert').classList.add("d-none"))
        }, 2000);
    }
    render() {
        return (
            <div className='formContainer p-2'>
                <div className='row my-2 d-flex align-items-center'>
                    <h3 className='border-bottom pb-3'>Connection</h3>
                </div>
                <label className='input-group row my-2 d-flex align-items-center'>
                    <div className="col-5 d-flex align-items-start">Email :</div>
                    <input id='mailInput' onChange={(e) => this.changeEmail(e)} className='col-7 input-group-text' type="email" placeholder='Email...' />
                </label>
                <div id='mailAlert' className='d-none alert alert-danger'>Email incorrect</div>
                <label className='input-group row mb-2 d-flex align-items-center'>
                    <div className="col-5 d-flex align-items-start">Mot de passe :</div>
                    <input id='passwordInput' onChange={(e) => this.changePassword(e)} className='col-7 input-group-text' type="password" placeholder='Mot de passe...' />
                </label>
                <div id='passwordAlert' className='d-none alert alert-danger mb-2'>Mot de passe incorrect</div>
                <hr className='my-0' />
                <div className='d-flex align-items-center justify-content-around my-3'>
                    <button onClick={() => this.props.changeIsActive()} id='changeIsActiveBtn'>
                        créer un compte...
                    </button>
                    <button onClick={() => this.checkUser()} className='btn btn-outline-light'>se connecter</button>
                </div>
            </div>
        )
    }
}

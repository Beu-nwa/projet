import React, { Component } from 'react';
/*import { postUserApi } from '../../../../apiServices/usersApiService.js'*/

export default class SignInComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            passWord: "",
            confirmPassWord: "",
            samePasswords: false,
        }
    }

    changePassword = (e) => {
        this.setState({
            passWord: e.target.value
        });
        this.comparePasswords(2, e);
    }
    changeConfirmePassword = (e) => {
        this.setState({
            confirmPassWord: e.target.value
        });
        this.comparePasswords(2, e);
    }
    comparePasswords = (x, e) => {
        let result = false;
        (x === 1 && e.target.value === this.state.confirmPassWord) || (x === 2 && e.target.value === this.state.passWord) ? result = true : result = false;
        this.setState({ samePasswords: result });
        this.changePasswordColors(result);
    }
    changePasswordColors = (x) => {
        return x === true ? (
            document.getElementById('passwordInput').classList.remove("border-danger"),
            document.getElementById('confirmPasswordInput').classList.remove("border-danger"),
            document.getElementById('passwordInput').classList.add("border-success"),
            document.getElementById('confirmPasswordInput').classList.add("border-success")
        ) : (
            document.getElementById('passwordInput').classList.remove("border-success"),
            document.getElementById('confirmPasswordInput').classList.remove("border-success"),
            document.getElementById('passwordInput').classList.add("border-danger"),
            document.getElementById('confirmPasswordInput').classList.add("border-danger"));
    }

    createUser = (e) => {
        e.preventDefault();
        let title = e.target['MrRadio'].checked ? "Mr" : e.target['MmeRadio'].checked ? "Mme" : "Autre"
        let lastname = e.target['lnInput'].value;
        let firstname = e.target['fnInput'].value;
        let dateOfBirth = e.target['dobInput'].value;
        let email = e.target['emailInput'].value;
        let password = e.target['passwordInput'].value;
        let phone = e.target['phoneInput'].value;
        if (lastname !== "" && firstname !== "" && dateOfBirth !== new Date() && phone !== "" && email !== "" && password !== "" && this.state.samePasswords === true) {
            const newPerson = { title, lastname, firstname, dateOfBirth, phone, email, password };
            this.AddUser(newPerson);
        } else alert("Veuillez remplir tous les champs!");
    }
    //AddUser = async (newUser) => {
    //    let response = await postUserApi(newUser);
    //    console.log(response);
    //    // this.FetchContact(); 
    //}
    render() {
        return (
            <form onSubmit={this.createUser} className='formContainer p-2'>
            <div className='row my-2 d-flex align-items-center'>
                <h3 className='border-bottom pb-3'>Inscription</h3>
            </div>
                <div className="row">
                    <div className="col-5 d-flex align-items-start">Genre :</div>
                    <div className="col-7 d-flex align-items-start">
                        <div className="form-check form-check-inline">
                            <label className="form-check-label" htmlFor="MrRadio">Mr</label>
                            <input className="form-check-input" type="radio" name="titlesRadio" id="MrRadio" value="Mr" />
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label" htmlFor="MmeRadio">Mme</label>
                            <input className="form-check-input" type="radio" name="titlesRadio" id="MmeRadio" value="Mme" />
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label" htmlFor="otherRadio">Autre</label>
                            <input className="form-check-input" type="radio" name="titlesRadio" id="otherRadio" defaultChecked value="Autre" />
                        </div>
                    </div>
                </div>
                <label className='input-group row my-2 d-flex align-items-center'>
                    <div className="col-5 d-flex align-items-start">Nom :</div>
                    <input id='lnInput' className='col-7 input-group-text' name='nom' type="text" placeholder='Nom...' />
                </label>
                <label className='input-group row my-2 d-flex align-items-center'>
                    <div className="col-5 d-flex align-items-start">Prénom :</div>
                    <input id='fnInput' className='col-7 input-group-text' name='prenom' type="text" placeholder='Prénom...' />
                </label>
                <label className='input-group row my-2 d-flex align-items-center'>
                    <div className="col-5 d-flex align-items-start">Date de naissance :</div>
                    <input id='dobInput' className='col-7 input-group-text' name='dob' type="date" />
                </label>
                <label className='input-group row my-2 d-flex align-items-center'>
                    <div className="col-5 d-flex align-items-start">Numéro de téléphone :</div>
                    <input id='phoneInput' className='col-7 input-group-text' name='phone' type="number" placeholder='numéro de téléphone...' />
                </label>
                <label className='input-group row my-2 d-flex align-items-center'>
                    <div className="col-5 d-flex align-items-start">Email :</div>
                    <input id='emailInput' className='col-7 input-group-text' name='email' type="email" placeholder='Email...' />
                </label>
                <label className='input-group row my-2 d-flex align-items-center'>
                    <div className="col-5 d-flex align-items-start">Mot de passe :</div>
                    <input id='passwordInput' onChange={(e) => this.changePassword(e)} className='col-7 input-group-text' name='password' type="password" placeholder='Mot de passe...' />
                </label>
                <label className='input-group row my-2 d-flex align-items-center'>
                    <div className="col-5 d-flex align-items-start">Confirmer :</div>
                    <input id='confirmPasswordInput' onChange={(e) => this.changeConfirmePassword(e)} className='col-7 input-group-text' type="password" placeholder='Confirmer mot de passe...' />
                </label>
                <hr />
                <div className='d-flex align-items-center justify-content-around my-3'>
                    <button onClick={() => this.props.changeIsActive()} id='changeIsActiveBtn'>
                        j'ai déjà un compte...
                    </button>
                    <button className='btn btn-outline-light'>S'inscrire</button>
                </div>
            </form>
        )
    }
}
// document.getElementById('testnom').value
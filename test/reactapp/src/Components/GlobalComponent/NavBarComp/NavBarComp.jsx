import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PersonFill } from 'react-bootstrap-icons'
import { PersonFillX } from 'react-bootstrap-icons'
import './NavBarComp.css'
class NavBarComp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            this.props.activeUser[0].status === "moderateur" ? (
                //Condition pour afficher la navBar en fonction du status de l'utilisateur         
                <div className="navBarContainer">
                    <div className='navBarUl'>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/training">Formations</Link>
                            </li>
                            <li>
                                <Link to="/training/add">Ajouter formation</Link>
                            </li>
                            <li>
                                <Link to="/user/list">utilisateurs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='navBarButton'>
                        <button onClick={() => this.props.changeActiveUser([{ status: "visiteur" }])}>
                            <Link to="/"><PersonFillX className='navIcon' /></Link>
                            <div className='navIconText'>Se deconnecter</div>
                        </button>
                    </div>
                </div>
                /////////////////////////////////////////////si l'utilisitaeur est stagiaire ou formateur ///
            ) : this.props.activeUser[0].status === "formateur" || this.props.activeUser[0].status === "stagiaire" ?
                (
                    <div className="navBarContainer">
                        <div className='navBarUl'>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/training">Formations</Link>
                                </li>
                                <li>
                                    <Link to="/user/details/:id">Détails</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='navBarButton'>
                            <button onClick={() => this.props.changeActiveUser([{ status: "visiteur" }])}>
                                <Link to="/"><PersonFillX className='navIcon' /></Link>
                                <div className='navIconText'>Se deconnecter</div>
                            </button>
                        </div>
                    </div>
                ) :
                ////////////////////NavBar par default (visiteur)
                <div className="navBarContainer">
                    <div className='navBarUl'>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/training">Formations</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='navBarButton'>
                        <button><Link to="/user"><PersonFill className='navIcon' /></Link>
                            <div className='navIconText'>Se connecter</div>
                        </button>
                    </div>
                </div>

        );
    }

}


export default NavBarComp;
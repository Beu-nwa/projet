import React, { Component } from 'react';
import { Link } from 'react-router-dom'
//import { formations } from '../../../../datas/formations';
import CareScaleComponent from '../CareScaleComponent/CareScaleComponent';
import './OneCardComp.css';
/*import test from './test.png';*/


export default class OneCardComp extends Component {

    constructor(props) { super(props); }

    render() {
        const { training } = this.props;
        return (
            <div className='col col-sm-5 col-lg-4 col-xl-3'>
                <div className="card" >
                    <div className="card-image"> <CareScaleComponent note={training.score} /> <hr />
                        <div className='cate'>{training.category.name}</div>
                        <hr />
                        Durée : {training.durationDay} jours
                        <hr />
                        Prix : {training.price}€
                        <hr />
                        Débute le : {new Date(training.startDate).toLocaleDateString()}
                        <hr />
                        Certification : {training.isCertified ? "oui" : "non"}
                    </div>
                    <div className="card-description">
                        <div className="text-title">
                            {training.name}
                        </div>
                        <Link to={`/training/details/${training.id}`} className='Linkbtn'>
                            <button className='btn-post'> Détails</button>
                        </Link>
                        <Link to='/cart' className='Linkbtn'>
                            <button className='btn-cart'> Sauvegarder </button>
                        </Link>
                        <div className="text-body">
                            {training.imgPath !== "" &&
                                <img className="logo" src={require(`../../../../datas/img/logos/${training.imgPath}`)} alt={"logo " + training.name} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
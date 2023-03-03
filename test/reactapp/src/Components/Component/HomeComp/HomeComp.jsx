import React, { Component } from 'react';
import './HomeComp.css';
import { Link } from 'react-router-dom'



class HomeComp extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='homeContainer'>
                <div className='textContainer'>
                    <h1>IT TRAINING</h1>
                    <h2>Votre site de formation</h2>
                    <p>Apprenez un métier d’avenir, grâce à IT Training</p>
                    <div>
                        <p>Vous apprendrez les compétences clés de votre futur métier en réalisant des projets tirés de cas concrets de la vie en entreprise.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia soluta, dicta ipsa aspernatur autem expedita possimus modi neque quae nemo porro nesciunt laboriosam, quis sequi minima incidunt alias omnis nihil!</p>
                    </div>
                </div>


                <div className='imgHome'>
                </div>
                <div className='btnLink'>
                <Link to='/training'>
                    <button className='btnforma'> Nos formations </button>
                </Link>
                </div>

                <div className="area" >
           
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div >
            </div>
        );
    }
}

export default HomeComp;




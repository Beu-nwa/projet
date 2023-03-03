import React, { Component } from 'react';
import OneCardComp from '../OneCardComp/OneCardComp';

class CardsComp extends Component {

    constructor(props) { super(props); }

    render() {
        return (
            <div className="container">
                <h2 id="tabelLabel" >Formations</h2>
                <div className='row'>
                    {this.props.trainings.map(training =>
                        <OneCardComp key={training.id} training={training} />
                    )}
                </div>
            </div>
        );
    }
}

export default CardsComp;

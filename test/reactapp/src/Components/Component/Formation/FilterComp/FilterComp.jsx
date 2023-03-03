import React, { Component } from 'react';
import './FilterComp.css';
import { formations } from '../../../../datas/formations.js';

export default class FilterComp extends Component {

    constructor(props) { super(props); }

    render() {
        return (
            <div className='filterContainer p-2 m-0'>
                <div className="row mt-2 mx-0">
                    <h3>Filtres</h3>
                </div>
                <div className="row my-3 mx-0">
                    <div className="input-group px-0">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Nom</span>
                        </div>
                        <input type="text" className="form-control" placeholder="nom formation" aria-label="training name" onChange={(e) => {
                            if (e.target.value.length === 0) {
                                this.props.handleNameChange("");
                            } else {
                                this.props.handleNameChange(e.target.value);
                            } } } />
                    </div>
                </div>
                <div className="row my-3 mx-0">
                    <select className="form-select" aria-label="Default select example" onChange={(e) => {
                        if (e.target.value.length === 0) this.props.handleNameChange("");
                        else this.props.onCategoryChange(e.target.value)
                    }}>
                        <option value="default">Catégories...</option>
                        {
                            this.props.categories.map(category => {
                                return <option value={category.id} key={category.id}>{category.name}</option>
                            })
                        }
                    </select>
                </div>
                <div className="row my-3 mx-0">
                    <div className="input-group px-0">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Prix</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Minimum" aria-label="minimum price" onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (isNaN(value) || value < 0 || e.target.value.length === 0) {
                                e.target.value = '';
                                this.props.handleMinPriceChange(0);
                            }
                            else { this.props.handleMinPriceChange(parseInt(value)); }
                        }} />
                        <div className="input-group-prepend">
                            <span className="input-group-text">€</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Maximum" aria-label="maximum price" onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (isNaN(value) || value < 0 || e.target.value.length === 0) {
                                e.target.value = '';
                                this.props.handleMaxPriceChange(999999);
                            }
                            else { this.props.handleMaxPriceChange(parseInt(value)); }
                        }} />
                        <div className="input-group-prepend">
                            <span className="input-group-text">€</span>
                        </div>
                    </div>
                </div>
                <div className="row my-3 mx-0">
                    <div className="input-group px-0">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Durée</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Minimum" aria-label="Username" onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (isNaN(value) || value < 0 || e.target.value.length === 0) {
                                e.target.value = '';
                                this.props.handleMinDurationDayChange(0);
                            }
                            else { this.props.handleMinDurationDayChange(parseInt(value)); }
                        }} />
                        <div className="input-group-prepend">
                            <span className="input-group-text">jours</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Maximum" aria-label="Username" onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (isNaN(value) || value < 0 || e.target.value.length === 0) {
                                e.target.value = '';
                                this.props.handleMaxDurationDayChange(999999);
                            }
                            else { this.props.handleMaxDurationDayChange(parseInt(value)); }
                        }} />
                        <div className="input-group-prepend">
                            <span className="input-group-text">jours</span>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-start align-items-center my-3 mx-0">
                    <span className='mx-3'>Certification.s</span>
                    <label className="switch">
                        <input type="checkbox" onChange={(e) => this.props.handleIsCertifiedChange(e.target.checked)} />
                        <span className="slider"></span>
                    </label>
                </div>
                <hr />
                <div className="row my-3 mx-0">
                    <div className="col col-12 text-start">
                        <span className='ms-1'>Commence...</span>
                    </div>
                    <div className="row my-3 mx-0">
                        <div className="input-group px-0">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Au plus tôt</span>
                            </div>
                            <input type="date" className="form-control" placeholder="Minimum" aria-label="Username" onChange={(e) => this.props.handleMinDateChange(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mx-0">
                        <div className="input-group px-0">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Au plus tard</span>
                            </div>
                            <input type="date" className="form-control" placeholder="Minimum" aria-label="Username" onChange={(e) => this.props.handleMaxDateChange(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

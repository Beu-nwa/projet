import React, { Component } from 'react';
import { Plus } from 'react-bootstrap-icons'

class AddFormationComp extends Component {
    render() {
        return (
            <div className='row justify-content-center gx-0'>
                <form className='formContainer col col-sm-11 col-md-8 col-lg-5 col-xl-4 col-xxl-3 my-4'>
                    <div className="row mt-2 mx-0">
                        <h3 className='border-bottom pb-3'>Ajout d'une formation</h3>
                    </div>
                    <div className="row my-3 mx-2">
                        <select className="form-select" aria-label="Default select example">
                            <option value="default">Catégories...</option>
                            {/* {
                            formations.map((x, index) => {
                                return !this.state.formationList.includes(x.category) ? (
                                    this.state.formationList.push(x.category),
                                    <option value={index} key={index} >{x.category} </option>
                                ) : null;
                            })
                        } */}
                        </select>
                    </div>
                    <div className="row my-3 mx-2">
                        <div className="input-group px-0">
                            <div className="input-group-prepend col-4">
                                <span className="input-group-text">Nom</span>
                            </div>
                            <input type="text" className="form-control" placeholder="nom..." aria-label="trainingname" />
                        </div>
                    </div>
                    <div className="row my-3 mx-2">
                        <div className="input-group px-0">
                            <div className="input-group-prepend col-4">
                                <span className="input-group-text">Localisation</span>
                            </div>
                            <input type="text" className="form-control" placeholder="localisation..." aria-label="traininglocalisation" />
                        </div>
                    </div>
                    <div className="row my-3 mx-2">
                        <div className="input-group px-0">
                            <div className="input-group-prepend col-4">
                                <span className="input-group-text">Prix</span>
                            </div>
                            <input type="number" className="form-control" placeholder="prix..." aria-label="price" />
                            <div className="input-group-prepend">
                                <span className="input-group-text">€</span>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3 mx-2">
                        <div className="input-group px-0">
                            <div className="input-group-prepend col-4">
                                <span className="input-group-text">Difficulté</span>
                            </div>
                            <input type="number" className="form-control" placeholder="difficulté..." aria-label="difficulty" />
                            <div className="input-group-prepend">
                                <span className="input-group-text">/10</span>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3 mx-2">
                        <div className="input-group px-0">
                            <div className="input-group-prepend col-4">
                                <span className="input-group-text">Durée</span>
                            </div>
                            <input type="number" className="form-control" placeholder="durée..." aria-label="duration" />
                            <div className="input-group-prepend">
                                <span className="input-group-text">jours</span>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3 mx-2">
                        <div className="input-group px-0">
                            <div className="input-group-prepend col-4">
                                <span className="input-group-text">Date de départ</span>
                            </div>
                            <input type="date" className="form-control" placeholder="Date de départ..." aria-label="startdate" />
                        </div>
                    </div>
                    <div className="row my-3 mx-2">
                        <div className="input-group px-0">
                            <div className="input-group-prepend col-4">
                                <span className="input-group-text">Date de fin</span>
                            </div>
                            <input type="date" className="form-control" placeholder="Date de fin..." aria-label="enddate" />
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-start align-items-center my-3 mx-0">
                        <span className='mx-3'>Certification.s</span>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-start align-items-center  mx-0">
                        <div className="form-group w-100">
                            <label for="description">Description</label>
                            <textarea className="form-control" id="description" rows="3"></textarea>
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex align-items-center justify-content-end m-3'>
                        <button className='btn btn-outline-light'><Plus/>Ajouter</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddFormationComp;

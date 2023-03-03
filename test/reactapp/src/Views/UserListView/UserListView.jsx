import React, { Component } from 'react';
import { Users } from '../../datas/Users.js';
import { Pencil } from 'react-bootstrap-icons';
import { Trash3 } from 'react-bootstrap-icons';
import './UserListView.css'

export default class UserListView extends Component {

    render() {
        return (
            <div id='logView' className='p-3'>
                <div className="row justify-content-center align-items-center mx-0 my-3">
                    <div className="col-8 userTable">
                        <table className=' table text-light'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nom</th>
                                    <th>Prenom</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Interactions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Users.map((user, index) => {
                                        return <React.Fragment key={index}>
                                            <tr>
                                                <td>{user.id}</td>
                                                <td>{user.nom}</td>
                                                <td>{user.prenom}</td>
                                                <td>{user.mail}</td>
                                                <td>{user.status}</td>
                                                <td>
                                                    <div className="divBtn d-flex justify-content-evenly">
                                                        <button className='btn btn-outline-warning'><Pencil /></button>
                                                        <button className='btn btn-outline-danger'><Trash3 /></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

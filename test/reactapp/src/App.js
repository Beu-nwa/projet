import React, { Component } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet
} from 'react-router-dom';
import HomeView from './Views/HomeView/HomeView';
import FormationView from './Views/FormationView/FormationView';
import Header from './Components/GlobalComponent/HeaderComp/HeaderComp';
import Footer from './Components/GlobalComponent/FooterComp/FooterComp';
import LogView from './Views/LogView/LogView';
import DetailsViews from './Views/DetailsViews/DetailsViews';
import AddFormationView from './Views/AddFormationView/AddFormationView';
import UserListView from './Views/UserListView/UserListView';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeUser: [{ status: "visiteur" }]
        }
    }
    changeActiveUser = (user) => {
        this.setState({
            activeUser: user
        })
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Header activeUser={this.state.activeUser} changeActiveUser={this.changeActiveUser} />
                    <main>
                        <Routes>
                            <Route path="/" element={<HomeView />} />
                            <Route path="/user" element={<LogView changeActiveUser={this.changeActiveUser} />} />
                            <Route path="/training" element={<FormationView />} />
                            <Route path="/training/details/:id" element={<DetailsViews />} />
                            <Route path="/training/add" element={<AddFormationView />} />
                            <Route path="/user/list" element={<UserListView />} />
                        </Routes>
                        <div>
                            <Outlet />
                        </div>
                    </main>
                </BrowserRouter>
                <Footer />
            </div>
        );
    }
}

export default App;

import React from 'react';
import './index.css';
import Login  from './components/Login.jsx'
import HomePage from './components/Pages/HomePage.jsx';
import Customers from './components/Customers.jsx';
import Dashboard from './components/Dashboard.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";


class App extends React.Component{
    constructor(props) {
        super(props)
        // this.state = {

        // }
    }
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/customers">
                        <Customers />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;
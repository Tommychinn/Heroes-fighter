import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar'

import SlickPersoProps from './SlickPersoProps';
import App from '../App';


export default function RouterApp () {
    return ( 
        <div>       
            <Router>            
                <NavBar />
                <Switch>
                    <Route exact path="/" component = {App} />
                    <Route path="/personnage" component = {''} />
                    <Route exact path="/personnage/:name" component = {SlickPersoProps} />                
                </Switch>
            </Router>
        </div>
        
    )
    }

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SlickPersoProps from "./SlickPersoProps";
import App from "../App";
import NavBar from "./NavBar";

export default function RouterApp() {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/characters" component={""} />
                <Route
                    exact
                    path="/personnage/:name"
                    component={SlickPersoProps}
                />
            </Switch>
        </BrowserRouter>
    );
}

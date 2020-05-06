import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SlickPersoProps from './SlickPersoProps';

import NavBar from './NavBar';
import Home from './Home';
import SlickPersonnages from './SlickPersonnages';

export default function RouterApp() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/characters" component={SlickPersonnages} />
        <Route path="/personnage/:name" component={SlickPersoProps} />
      </Switch>
    </BrowserRouter>
  );
}

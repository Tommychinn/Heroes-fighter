import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import CombatArena from './CombatArena';
import PageAllPerso from './PageAllPerso';

export default function RouterApp() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/allPerso" component={PageAllPerso} />
        <Route path="/arenes" component={CombatArena} />
      </Switch>
    </BrowserRouter>
  );
}

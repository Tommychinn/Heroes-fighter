import React from 'react';
import './App.css';

import LetsGoContainer from './components/LetsGoContainer';
import PersoMostStrong from './components/PersoMostStrong';
import NavBar from './components/NavBar';
import HomeAreneCont from './components/HomeAreneCont';
import PopUpAreneChoice from './components/PopUpAreneChoice';
import SlickPersonnages from './components/SlickPersonnages';
import PersoMostPopular from './components/PersoMostPopular';
import RouterApp from './components/RouterApp';

function App() {
  return (
    <div className="App">
      <RouterApp />
    </div>
  );
}

export default App;

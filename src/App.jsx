import React from 'react';
import './App.css';

import LetsGoContainer from './components/LetsGoContainer';
import PersoMostStrong from './components/PersoMostStrong';
import NavBar from './components/NavBar';
import HomeAreneCont from './components/HomeAreneCont';
import PopUpAreneChoice from './components/PopUpAreneChoice';
import SlickPersonnages from './components/SlickPersonnages';
import PersoMostPopular from './components/PersoMostPopular';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="body">
        <PopUpAreneChoice />
        <LetsGoContainer />
        <SlickPersonnages />
        <PersoMostPopular />
        <PersoMostStrong />
        <HomeAreneCont slide={4} />
      </div>
    </div>
  );
}

export default App;

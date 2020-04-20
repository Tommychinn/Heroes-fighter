import React from 'react';
import GameRules from './components/GameRules';
import './App.css';
import { Container } from 'reactstrap';
import ContainerPersonnages from './components/ContainerPersonnages';
import Personnages from './components/PersonnageCarousel'
import SlickPersonnages from './components/SlickPersonnages'

function App() {
  return (
    <div className="App">
      <SlickPersonnages />
    </div>
  );
}

export default App;

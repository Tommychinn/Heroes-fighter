import React from 'react';
import './App.css';
import { Container } from 'reactstrap';
import ContainerPersonnages from './components/ContainerPersonnages';
import Personnages from './components/PersonnageCarousel'
import SlickPersonnages from './components/SlickPersonnages'
import LetsGoContainer from './components/LetsGoContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <SlickPersonnages />
      <NavBar /> 
      <LetsGoContainer />
   </div>
  );
}

export default App;

import React from 'react';
import './App.css';
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

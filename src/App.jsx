import React from 'react';
import './App.css';

import HomeAreneCont from './components/HomeAreneCont';
import LetsGoContainer from './components/LetsGoContainer';
import NavBar from './components/NavBar';
import PopUpAreneChoice from './components/PopUpAreneChoice';
import SearchCharacter from './components/SearchBar/SearchCharacter';
import SlickPersonnages from './components/SlickPersonnages';

function App() {
  return (
    <div className="App">
      <PopUpAreneChoice />
      <NavBar />
      <div className="body">
        <SearchCharacter />
        <LetsGoContainer />
        <SlickPersonnages />
        <HomeAreneCont slide={4} />
      </div>
    </div>
  );
}

export default App;

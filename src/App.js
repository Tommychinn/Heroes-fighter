import React from "react";
import "./App.css";
import SlickPersonnages from "./components/SlickPersonnages";
import LetsGoContainer from "./components/LetsGoContainer";
import NavBar from "./components/NavBar";
import HomeAreneCont from "./components/HomeAreneCont";
import PopUpAreneChoice from "./components/PopUpAreneChoice"

function App() {
  return (
    <div className="App">
      <PopUpAreneChoice />
      <NavBar />
      <div className="body">
        <LetsGoContainer />
        <SlickPersonnages />
        <HomeAreneCont slide={4}/>
      </div>
   </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import SearchCharacter from "./components/SearchBar/SearchCharacter";
// import SlickPersonnages from "./components/SlickPersonnages";
// import LetsGoContainer from "./components/LetsGoContainer";
// import NavBar from "./components/NavBar";
// import HomeAreneCont from "./components/HomeAreneCont";

function App() {
  return (
    <div className="App">
      {/* <NavBar />
      <div className="body">
        <LetsGoContainer />
        <SlickPersonnages />
        <HomeAreneCont />
      </div> */}
      <SearchCharacter />
    </div>
  );
}

export default App;

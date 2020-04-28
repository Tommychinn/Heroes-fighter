import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PersoMostPopular from "./components/PersoMostPopular";

function PageAllPerso() {
  return (
    <div className="App">
      <NavBar />
      <div className="body">
        <PersoMostPopular />
      </div>
    </div>
  );
}

export default PageAllPerso;
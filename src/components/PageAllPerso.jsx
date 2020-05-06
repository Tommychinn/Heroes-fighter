import React from 'react';
import NavBar from './NavBar';
import PersoMostPopular from './PersoMostPopular';

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

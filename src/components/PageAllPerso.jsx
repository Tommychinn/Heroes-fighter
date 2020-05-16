import React from 'react';

import PersoMostPopular from './PersoMostPopular';
import SearchCharacter from './SearchBar/SearchCharacter';
import PersoMostStrong from './PersoMostStrong';
import SlickPersonnages from './SlickPersonnages';

function PageAllPerso() {
  return (
    <div className="body">
      <SearchCharacter />
      <SlickPersonnages />
      <PersoMostPopular />
      <PersoMostStrong />
    </div>
  );
}

export default PageAllPerso;

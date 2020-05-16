import React from 'react';

import LetsGoContainer from './LetsGoContainer';
import SlickPersonnages from './SlickPersonnages';
import TitleAllPerso from './TitleAllPerso';
// import HomeAreneCont from './HomeAreneCont';

function Home() {
  return (
    <div className="body">
      <LetsGoContainer />
      <SlickPersonnages />
      <TitleAllPerso />
      {/* <HomeAreneCont slide={4} /> */}
    </div>
  );
}

export default Home;

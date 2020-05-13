import React from 'react';

import LetsGoContainer from './LetsGoContainer';
import SlickPersonnages from './SlickPersonnages';
// import HomeAreneCont from './HomeAreneCont';

function Home() {
  return (
    <div className="body">
      <LetsGoContainer />
      <SlickPersonnages />
      {/* <HomeAreneCont slide={4} /> */}
    </div>
  );
}

export default Home;

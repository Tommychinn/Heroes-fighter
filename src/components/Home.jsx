import React from 'react';

import LetsGoContainer from './LetsGoContainer';
import SlickPersonnages from './SlickPersonnages';
import HomeAreneCont from './HomeAreneCont';
import PopUpAreneChoice from './PopUpAreneChoice';

function Home() {
  return (
    <div className="body">
      <LetsGoContainer />
      <SlickPersonnages />
      <PopUpAreneChoice />
      <HomeAreneCont slide={4} />
    </div>
  );
}

export default Home;

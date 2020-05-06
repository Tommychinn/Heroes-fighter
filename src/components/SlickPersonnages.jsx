import React from 'react';
import Slider from 'react-slick';
import axios from 'axios';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Personnages.module.css';
import SlickPersoProps from './SlickPersoProps';

class SlickPersonnages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: [],
    };
  }

  getHero() {
    axios
      .get('https://superheroapi.com/api.php/1274121622792743/search/a')
      .then(({ data }) => {
        this.setState({ hero: data.results });
      });
  }

  render() {
    const { hero } = this.state;
    return (
      <div className={styles.personnages}>
        <h2>Les personnages</h2>
        <Slider
          className="center"
          infinite="true"
          centerPadding="60px"
          slidesToShow="4"
          swipeToSlide="true"
        >
          {hero.map((character) => {
            return (
              <SlickPersoProps
                image={character.image}
                name={character.name}
                biography={character.biography}
                powerstats={character.powerstats}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default SlickPersonnages;

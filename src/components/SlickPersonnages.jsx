import React from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { Row } from 'reactstrap';

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
    // this.randomize = this.randomizeHero.bind(this);
  }

  componentDidMount() {
    // const { hero } = this.state;
    this.getHero();
    // this.setState({ hero: this.randomizeHero(hero) });
  }

  getHero() {
    axios
      .get('https://superheroapi.com/api.php/1274121622792743/search/an')
      .then(({ data }) => {
        this.setState({ hero: data.results });
      });
  }

  // randomizeHero(tab) {
  //   let i = 0;
  //   let j = 0;
  //   let tmp = 0;
  //   for (i = tab.length - 1; i > 0; i--) {
  //     j = Math.floor(Math.random() * (i + 1));
  //     tmp = tab[i];
  //     tab[i] = tab[j];
  //     tab[j] = tmp;
  //   }
  //   return tab;
  // }

  render() {
    const { hero } = this.state;
    return (
      <div className={styles.personnages}>
        <Row>
          <h2>Les personnages</h2>
        </Row>
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
                name={character.name}
                image={character.image}
                powerstats={character.powerstats}
                biography={character.biography}
                id={character.id}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default SlickPersonnages;

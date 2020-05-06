import React from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { Row, Col } from 'reactstrap';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Personnages.module.css';
import SlickPersoProps from './SlickPersoProps';

class PersoMostPopular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: [],
    };
  }

  componentDidMount() {
    this.getHero();
  }

  getHero() {
    axios
      .get(
        'https://heroes-api-wrapper.herokuapp.com/heroes?heroIds=149,70,213,418,309,157,303,540,620,659,352,349,345,346'
      )
      .then(({ data }) => {
        this.setState({ hero: data });
      });
  }

  render() {
    const { hero } = this.state;
    return (
      <div className={styles.personnages}>
        <Row>
          <Col xs="9">
            <h2>Les + populaires</h2>
          </Col>
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
              />
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default PersoMostPopular;

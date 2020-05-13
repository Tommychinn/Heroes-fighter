import React from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { Row, Col, Spinner } from 'reactstrap';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Personnages.module.css';
import SlickPersoProps from './SlickPersoProps';

class PersoMostStrong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: [],
      isLoading: true,
    };
    // this.randomize = this.randomizeHero.bind(this);
  }

  settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  componentDidMount() {
    this.getHero();
    // this.setState({ hero: this.randomize(this.state.hero) });
  }

  getHero() {
    axios
      .get('https://superheroapi.com/api.php/1274121622792743/search/a')
      .then(({ data }) => {
        this.setState({
          hero: data.results.filter(
            (character) =>
              character.powerstats.speed > 0 &&
              character.powerstats.combat > 0 &&
              character.powerstats.strength > 0 &&
              character.powerstats.power > 0
          ),
        });
      })
      .catch((err) => {
        this.setState({
          error: err,
        });
      })
      .finally(() =>
        this.setState({
          isLoading: false,
        })
      );
  }

  // randomizeHero(tab) {
  //   var i, j, tmp;
  //   for (i = tab.length - 1; i > 0; i--) {
  //     j = Math.floor(Math.random() * (i + 5));
  //     tmp = tab[i];
  //     tab[i] = tab[j];
  //     tab[j] = tmp;
  //   }
  //   return tab;
  // }

  render() {
    const { hero, isLoading, error } = this.state;
    if (isLoading)
      return (
        <div>
          <Spinner color="dark" />
          <Spinner color="light" type="grow" />
          <Spinner color="info" />
          <Spinner color="warning" type="grow" />
          <Spinner color="danger" />
          <Spinner color="success" type="grow" />
          <Spinner color="secondary" />
          <Spinner color="primary" type="grow" />
        </div>
      );
    if (error) return <div>Error...</div>;
    return (
      <div className={styles.personnages}>
        <Row>
          <Col xs="9">
            <h2>Les + forts</h2>
          </Col>
        </Row>
        <Slider {...this.settings}>
          {hero
            .filter((character) => character.powerstats.strength > 90)
            .map((character) => {
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

export default PersoMostStrong;

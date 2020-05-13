import React from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { Row, Spinner } from 'reactstrap';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Personnages.module.css';
import SlickPersoProps from './SlickPersoProps';

class SlickPersonnages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: [],
      isLoading: false,
    };
    this.randomize = this.randomizeHero.bind(this);
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  componentDidMount() {
    const { hero } = this.state;
    this.getHero();
    this.setState({ hero: this.randomizeHero(hero) });
  }

  getHero() {
    axios
      .get('https://superheroapi.com/api.php/1274121622792743/search/an')
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

  randomizeHero(tab) {
    let i = 0;
    let j = 0;
    let tmp = 0;
    for (i = tab.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      tmp = tab[i];
      tab[i] = tab[j];
      tab[j] = tmp;
    }
    return tab;
  }

  render() {
    const { isLoading, error, hero } = this.state;

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
          <h2>Les personnages</h2>
        </Row>
        <Slider {...this.settings}>
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

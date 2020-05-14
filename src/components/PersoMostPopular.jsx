import React from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { Row, Col, Spinner } from 'reactstrap';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Personnages.module.css';
import SlickPersoProps from './SlickPersoProps';

class PersoMostPopular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: [],
      isLoading: true,
    };
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
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
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
  }

  getHero() {
    axios
      .get(
        'https://heroes-api-wrapper.herokuapp.com/heroes?heroIds=540,620,659,352,349,345,346,30,149,70,213,418,309,157,303,540,620,659,352,349,345,346,30,149,70'
      )
      .then(({ data }) => {
        this.setState({ hero: data });
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

  render() {
    const { hero, isLoading, error } = this.state;
    if (isLoading)
      return (
        <div>
          <Spinner color="primary" />
          <Spinner color="secondary" type="grow" />
          <Spinner color="success" />
          <Spinner color="danger" type="grow" />
          <Spinner color="warning" />
          <Spinner color="info" type="grow" />
          <Spinner color="light" />
          <Spinner color="dark" type="grow" />
        </div>
      );
    if (error) return <div>Error...</div>;
    return (
      <div className={styles.personnages}>
        <Row>
          <Col xs="9">
            <h2 className={styles.h2}>The most popular</h2>
          </Col>
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

export default PersoMostPopular;

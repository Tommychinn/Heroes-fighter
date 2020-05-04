import React from "react";
import Slider from "react-slick";
import axios from "axios";
import {
  Row,
  Col,
} from "reactstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Personnages.module.css";
import SlickPersoProps from "./SlickPersoProps";


class PersoMostStrong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: [],
    };
    this.randomize = this.randomizeHero.bind(this)

  }

  componentDidMount() {
    this.getHero();
    this.setState({hero : this.randomize(this.state.hero)})
  }

  getHero() {
    axios
      .get("https://superheroapi.com/api.php/1274121622792743/search/an")
      .then(({ data }) => {
        this.setState({ hero: data.results });
      });
  }

  randomizeHero(tab) {
    var i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 5));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
    return tab;
  }
  

    settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true
    }

  render() {
    return (
      <div className={styles.personnages}>
        <Row>
          <Col xs="9"><h2>Les + forts</h2></Col>
        </Row>
        <Slider {...this.settings}>
          {
            this.state.hero.filter(hero => hero.powerstats.strength >90)
            .map(hero => {
              return(<SlickPersoProps {...hero}/>)
            })
          }
        </Slider>
      </div>
    );
  }
}

export default PersoMostStrong;

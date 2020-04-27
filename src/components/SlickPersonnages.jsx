import React from "react";
import Slider from "react-slick";

import axios from 'axios';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Personnages.module.css";
import SlickPersoProps from "./SlickPersoProps";



class SlickPersonnages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: []
    };
  }

  componentDidMount() {
    this.getHero();
  }

  getHero() {
    axios
      .get("https://superheroapi.com/api.php/1274121622792743/search/a")
      .then(({ data }) => {
        this.setState({ hero: data.results });
        console.log(this.state.hero);
      });
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
        <h2>Les personnages</h2>
        <Slider {...this.settings}>
          {
            this.state.hero.map(hero => {
              return(<SlickPersoProps {...hero}/>
                )
              
            })
          }
        </Slider>
      </div>
    );
  }
}

export default SlickPersonnages;
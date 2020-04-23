import React from "react";
import Slider from "react-slick";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Personnages.module.css";
import SlickPersoProps from "./SlickPersoProps";

// const heroes = [
//     {
//         name: "Captain Marvel",
//         image: Capmarvel,
//     },
//     {
//         name: "Dr Manhatten",
//         image: Drmanhatten,
//     },
//     {
//         name: "Captain marvel",
//         image: Capmarvel,
//     },
//     {
//         name: "Dr manhatten",
//         image: Drmanhatten,
//     },
//     {
//         name: "Captain Marvel",
//         image: Capmarvel,
//     },
//     {
//         name: "Dr Manhatten",
//         image: Drmanhatten,
//     },
//     {
//         name: "Captain marvel",
//         image: Capmarvel,
//     },
//     {
//         name: "Dr manhatten",
//         image: Drmanhatten,
//     },
// ];

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
      .get(
        "https://superheroapi.com/api.php/1274121622792743/search/a"
      )
      .then(res => res.data)
      .then(data => {
        this.setState({ hero: data.results });
        console.log(this.state.hero);
      });
  }
  //${Math.floor(
    //Math.random() * 731
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
              return(<SlickPersoProps hero={hero} />
                )
              
            })
          }
        </Slider>
      </div>
    );
  }
}

export default SlickPersonnages;
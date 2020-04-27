import React from "react";
import Slider from "react-slick";
import axios from "axios";

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
    this.randomize = this.randomize.bind(this)
  }

  componentDidMount() {
    this.getHero();
    this.setState({hero : this.randomize(this.state.hero)})
  }

  getHero() {
    axios
      .get("https://superheroapi.com/api.php/1274121622792743/search/man")
      .then(({ data }) => {
        this.setState({ hero: data.results });
      });
  }

  randomize(tab) {
    var i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
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
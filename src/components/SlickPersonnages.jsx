import React from "react";
import Slider from "react-slick";
import Capmarvel from "./images/Capmarvel.jpg";
import Drmanhatten from "./images/Drmanhatten.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Personnages.module.css";
import SlickPersoProps from "./SlickPersoProps";

const heroes = [
    {
        name: "Captain Marvel",
        image: Capmarvel,
    },
    {
        name: "Dr Manhatten",
        image: Drmanhatten,
    },
    {
        name: "Captain marvel",
        image: Capmarvel,
    },
    {
        name: "Dr manhatten",
        image: Drmanhatten,
    },
    {
        name: "Captain Marvel",
        image: Capmarvel,
    },
    {
        name: "Dr Manhatten",
        image: Drmanhatten,
    },
    {
        name: "Captain marvel",
        image: Capmarvel,
    },
    {
        name: "Dr manhatten",
        image: Drmanhatten,
    },
];

function SlickPersonnages() {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
    };

    return (
        <div className={styles.personnages}>
            <h2>Les personnages</h2>
            <Slider {...settings}>
                    {heroes.map((hero) => (
                        <SlickPersoProps name={hero.name} image={hero.image} />
                    ))}
            </Slider>
        </div>
    );
}

export default SlickPersonnages;

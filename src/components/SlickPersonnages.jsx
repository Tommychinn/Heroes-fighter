import React from "react";
import Slider from "react-slick";
import Capmarvel from "./images/Capmarvel.jpg";
import Drmanhatten from "./images/Drmanhatten.jpg";
import axios from 'axios';

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
    constructor(props){
        super(props);
        this.state={
            hero:{
                id: 1,
                name:'',
                powerstats:{
                    intelligence:'',
                    strength:'',
                    speed:'',
                    durability:'',
                    power:'',
                    combat:'',
                }, 
                image:{
                    url:''
                },  
            }
        }
    }

    id = Math.floor((Math.random()*731))

    getHero (id) {
        axios.get(`https://superheroapi.com/api.php/1274121622792743/${id}`)
        .then(response => response.data)
        .then(data => {
            this.setState({hero: data})
        })
    }

    settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
    }
    render() {
        return (
            <div className={styles.personnages}>
                <h2>Les personnages</h2>
                <Slider {...this.settings}>
                        {this.heroes.map((hero) => (
                            <SlickPersoProps name={hero.name} image={hero.image} />
                        ))}
                </Slider>
            </div>
        );
    }
    
}


export default SlickPersonnages;

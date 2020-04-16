import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import styles from './HomeAreneCont.module.css';


class SlickPersonnages extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
        return (
          <div>
            <h2>Les arènes</h2>
            <Slider {...settings}>
              <div>
                <img src="https://via.placeholder.com/318x180.png" alt="arena01"/>
              </div>
              <div>
                <img src="https://via.placeholder.com/318x180.png" alt='arena02' />
              </div>
              <div>
                <img src="https://via.placeholder.com/318x180.png" alt='arena03' />
              </div>
              <div>
                <img src="https://via.placeholder.com/318x180.png" alt='arena04' />
              </div>
              <div>
                <img src="https://via.placeholder.com/318x180.png" alt='arena05' />
              </div>
              <div>
                <img src="https://via.placeholder.com/318x180.png" alt='arena06' />
              </div>
              <div>
                <img src="https://via.placeholder.com/318x180.png" alt='arena07' />
              </div>
              <div>
                <img src="https://via.placeholder.com/318x180.png" alt='arena08' />
              </div>
            </Slider>
          </div>
        );
      }
    }

    export default SlickPersonnages
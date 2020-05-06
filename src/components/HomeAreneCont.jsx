import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './HomeAreneCont.module.css';

const imgArena = [
  { imageSrc: './arena-images/arena01.jpg', titleImg: 'arena01' },
  { imageSrc: './arena-images/arena02.jpg', titleImg: 'arena02' },
  { imageSrc: './arena-images/arena03.png', titleImg: 'arena03' },
  { imageSrc: './arena-images/arena04.jpg', titleImg: 'arena04' },
  { imageSrc: './arena-images/arena05.png', titleImg: 'arena05' },
  { imageSrc: './arena-images/arena06.jpg', titleImg: 'arena06' },
  { imageSrc: './arena-images/arena07.png', titleImg: 'arena07' },
  { imageSrc: './arena-images/arena08.jpg', titleImg: 'arena08' },
];

function HomeAreneCont({ slide }) {
  return (
    <div className={styles.arene_container}>
      <h2>Les arènes</h2>
      <Slider
        className="center"
        infinite="true"
        centerPadding="60px"
        swipeToSlide="true"
        slidesToShow={slide}
      >
        {imgArena.map((arena) => (
          <div>
            <img
              className={styles.areneNormal}
              src={arena.imageSrc}
              alt={arena.titleImg}
              key={arena.titleImg}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
HomeAreneCont.propTypes = {
  slide: PropTypes.number.isRequired,
};

export default HomeAreneCont;

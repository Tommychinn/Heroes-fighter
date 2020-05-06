import React, { useState } from 'react';
import Slider from 'react-slick';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './HomeAreneCont.module.css';

function PopUpAreneChoice() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
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

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Choisir
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>
          Clique sur une arène de ton choix pour commencer le game !
        </ModalHeader>
        <ModalBody>
          <div className={styles.arene_container}>
            <h2>Clique sur une arène de ton choix</h2>
            <Slider
              className="center"
              infinite="true"
              centerPadding="60px"
              swipeToSlide="true"
              slidesToShow="4"
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
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default PopUpAreneChoice;

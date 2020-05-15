import React from 'react';
import { ModalBody, Col } from 'reactstrap';
import CardRules from './CardRules';

import styles from './ModalBodyRules.module.css';

function ModalBodyRules() {
  return (
    <Col sm="8" className={styles.rules}>
      <ModalBody className={styles.modalbody}>
        <div className={styles.text}>
          <h5 className={styles.h5} id="Goal">
            Game Rules
          </h5>
          <p className={styles.prules}>
            The aim of the game is for your chosen superhero to fight against a
            worthy adversary, reducing his or her health points to 0.
          </p>
          <h5 className={styles.h5} id="Elements">
            Elements of the Game
          </h5>
          <p className={styles.prules}>
            The game centres around superhero cards. Each hero has a range of
            &quots;powerstats&quot; for example:
          </p>
          <CardRules />
          <h5 className={styles.h5} id="Course">
            Getting started
          </h5>
          <p className={styles.prules}>
            After having chosen your hero to fight with, you will be transported
            to an arena faced by a randomly chosen adversary. You take turns in
            sending attacks in the direction of the other until a hero emerges
            victorious!
          </p>
          <h5 className={styles.h5} id="End">
            End of the game
          </h5>
          <p className={styles.prules}>
            The fight is over when the health bar of either your or your
            adversary&apos;s hero is reduced to 0. You then have the option to
            choose another character and play again!
          </p>
          <h5 className={styles.h5bis}>
            Will you be capable of winning against the most powerful superheroes
            in all the galaxy?
          </h5>
        </div>
      </ModalBody>
    </Col>
  );
}

export default ModalBodyRules;

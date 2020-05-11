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
            But du jeu
          </h5>
          <p className={styles.prules}>
            Le but du jeu est que votre carte affronte celle de votre adversaire
            et que sa barre de vie arrive à 0.
          </p>
          <h5 className={styles.h5} id="Elements">
            Eléments du jeu
          </h5>
          <p className={styles.prules}>
            Le jeu est composé de cartes de super héros. Chaque héros possède 6
            &quot;powerstats&quot; : intelligence, force, vitesse, puissance,
            durabilité et combat. Par exemple :
          </p>
          <CardRules />
          <h5 className={styles.h5} id="Course">
            Déroulement de la partie
          </h5>
          <p className={styles.prules}>
            Après avoir choisi votre héros pour combattre, vous arrivez dans une
            arène face à un adversaire choisi aléatoirement. Vous portez à tour
            de role une attaque à votre adversaire afin de le mettre à terre. Il
            existe différentes attaques disponibles :
          </p>
          <h5 className={styles.h5} id="End">
            Fin de la partie
          </h5>
          <p className={styles.prules}>
            La partie est terminée quand la barre de vie de votre personnage ou
            de celui de votre adversaire est égale à 0.
          </p>
          <h5 className={styles.h5bis}>
            Serez vous capable de battre les héros les plus fort de toute la
            galaxie?
          </h5>
        </div>
      </ModalBody>
    </Col>
  );
}

export default ModalBodyRules;

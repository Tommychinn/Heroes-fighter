import React from 'react';

import { Row, Col } from 'reactstrap';

import styles from './MenuRules.module.css';

function MenuRules() {
  return (
    <Row className={styles.menu}>
      <Col className={styles.col}>
        <h4 className={styles.gamerules}>
          <img
            className={styles.gamerulesimg}
            src="https://image.flaticon.com/icons/svg/2004/2004760.svg"
            alt="Avengers"
          />
          Regles du jeu
        </h4>
        <h6 className={styles.h6}>
          <a className={styles.h6a} href="#Goal">
            But du jeu
          </a>
        </h6>
        <h6 className={styles.h6}>
          <a className={styles.h6a} href="#Elements">
            Eléments du jeu
          </a>
        </h6>
        <h6 className={styles.h6}>
          <a className={styles.h6a} href="#Course">
            Déroulement du jeu
          </a>
        </h6>
        <h6 className={styles.h6}>
          <a className={styles.h6a} href="#End">
            Fin du jeu
          </a>
        </h6>
      </Col>
    </Row>
  );
}

export default MenuRules;

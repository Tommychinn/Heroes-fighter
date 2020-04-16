import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "reactstrap";

import styles from './MenuRules.module.css'
import "./MenuRules.css";

function MenuRules() {
  return (
    <Row className={styles.menu}>
      <Col className={styles.col}>
        <h4 className={styles.gamerules}>
          {" "}
          <img className={styles.gamerulesimg} src="https://image.flaticon.com/icons/svg/2004/2004760.svg" />{" "}
          Game Rules
        </h4>
        <h6 className={styles.h6}>
          <a className={styles.h6a} href="#Goal">Goal of game</a>
        </h6>
        <h6 className={styles.h6}>
          <a className={styles.h6a} href="#Elements">Elements of game</a>
        </h6>
        <h6 className={styles.h6}>
          <a className={styles.h6a} href="#Course">Course of game</a>
        </h6>
        <h6 className={styles.h6}>
          <a className={styles.h6a} href="#End">End of game</a>
        </h6>
      </Col>
    </Row>
  );
}

export default MenuRules;

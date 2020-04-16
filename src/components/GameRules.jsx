import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";

import fond1 from "./img/fond-1small.jpg";
import MenuRules from './MenuRules';
import ModalBodyRules from './ModalBodyRules'

import styles from './GameRules.module.css';
import './GameRules.css'

const GameRules = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <div onClick={toggle}>
        <img className={styles.img} src="https://image.flaticon.com/icons/svg/2004/2004760.svg" />
        <p>
          Game <br />
          Rules
        </p>
      </div>
      <Modal isOpen={modal} toggle={toggle} className="{className}">
        <ModalHeader toggle={toggle}>
          <img src={fond1} alt="avengers" className={styles.avengers} />
        </ModalHeader>
        <Row className={styles.row2}>
          <Col sm="4">
            <MenuRules />
            <Row className={styles.alignbutton}>
              <Col className="text-center">
                <Button className={styles.bigbutton} onClick={toggle}>Start</Button>
              </Col>
            </Row>
          </Col>
          <ModalBodyRules />
        </Row>
      </Modal>
    </div>
  );
};

export default GameRules;

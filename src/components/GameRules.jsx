import React, { useState } from 'react';

import { Button, Modal, ModalHeader, Row, Col } from 'reactstrap';

import fond1 from './img/fond-1small.jpg';
import MenuRules from './MenuRules';
import ModalBodyRules from './ModalBodyRules';

import styles from './GameRules.module.css';

function GameRules() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleKeyDown = () => {
    return 'toto';
  };

  return (
    <>
      <div
        onClick={toggle}
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className={styles.cursor}
      >
        <img
          className={styles.img}
          src="https://image.flaticon.com/icons/svg/2004/2004760.svg"
          alt="Logo"
        />
      </div>
      <Modal isOpen={modal} toggle={toggle} className={styles.background}>
        <ModalHeader>
          <img src={fond1} alt="avengers" className={styles.avengers} />
        </ModalHeader>
        <Row className={styles.row2}>
          <Col sm="4">
            <MenuRules />
            <Row className={styles.alignbutton}>
              <Col className="text-center">
                <Button className={styles.bigbutton} onClick={toggle}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </Col>
          <ModalBodyRules />
        </Row>
      </Modal>
    </>
  );
}

export default GameRules;

import React from 'react';
import { Button, Modal, ModalBody, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import styles from './EndModal.module.css';
import './EndModal.css';

function EndModalWinner() {
  return (
    <div>
      <Modal isOpen="true" className={styles.background}>
        <Confetti className={styles.confetti} />
        <ModalBody className={styles.modal}>
          <Row>
            <Col>
              <h1>Vous avez gagné !</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={{ size: 2, offset: 5 }}>
              <Button color="secondary" tag={Link} to="/allPerso">
                Retour
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default EndModalWinner;

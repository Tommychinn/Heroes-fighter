import React from 'react';
import { Button, Modal, ModalBody, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './EndModal.module.css';
import './EndModal.css';

function EndModalLooser() {
  return (
    <div>
      <Modal isOpen="true" className={styles.background}>
        <ModalBody className={styles.modal}>
          <Row>
            <Col>
              <h1>Vous avez perdu !</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={{ size: 2, offset: 5 }}>
              <Button
                className={styles.modalButton}
                color="secondary"
                tag={Link}
                to="/allPerso"
              >
                Retour
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default EndModalLooser;

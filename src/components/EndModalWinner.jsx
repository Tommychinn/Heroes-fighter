import React from 'react';
import { Button, Modal, ModalBody, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import PropTypes from 'prop-types';
import styles from './EndModal.module.css';
import './EndModal.css';

function EndModalWinner({ isOpen, myCounter, counterAdversary }) {
  return (
    <div>
      <Modal isOpen={isOpen} className={styles.background}>
        <ModalBody className={styles.modal}>
          <Row>
            {myCounter > counterAdversary ? (
              <Col>
                <Confetti className={styles.confetti} />
                <h1>Vous avez gagné !</h1>
              </Col>
            ) : (
              <Col>
                <h1>Vous avez perdu !</h1>
              </Col>
            )}
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

EndModalWinner.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  myCounter: PropTypes.string.isRequired,
  counterAdversary: PropTypes.string.isRequired,
};

export default EndModalWinner;

import React from 'react';
import { Button, Modal, ModalBody, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import PropTypes from 'prop-types';
import styles from './EndModal.module.css';
import './EndModalWinner.module.css';

function EndModalWinner({
  isOpen,
  myCounter,
  counterAdversary,
  name,
  nameAdversary,
}) {
  return (
    <div>
      <Modal isOpen={isOpen} className={styles.background}>
        <ModalBody className={styles.modal}>
          <Row>
            {myCounter > counterAdversary ? (
              <Col>
                <Confetti className={styles.confetti} />
                <h1>You win !</h1>
                <h2>{name} is victorious.</h2>
              </Col>
            ) : (
              <Col>
                <h1>You lose !</h1>
                <h2>{nameAdversary} crushed you.</h2>
              </Col>
            )}
          </Row>
          <Row>
            <Col xs={{ size: 2, offset: 5 }}>
              <Button
                className={styles.button}
                color="secondary"
                tag={Link}
                to="/allPerso"
              >
                Play again
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
  nameAdversary: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default EndModalWinner;

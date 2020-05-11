import React from 'react';
import { Progress, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import styles from './CombatArena.module.css';

function CombatArenaProgress({ name, myCounter }) {
  return (
    <>
      <Row className="m-3">
        <Col className={styles.name}>
          <p>{name}</p>
        </Col>
      </Row>
      <Row>
        <Col className={styles.vie}>
          <Progress color="primary" value={myCounter}>
            {myCounter}
          </Progress>
        </Col>
      </Row>
    </>
  );
}
CombatArenaProgress.propTypes = {
  name: PropTypes.string.isRequired,
  myCounter: PropTypes.string.isRequired,
};

export default CombatArenaProgress;

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
      <Row style={{ height: '100%' }}>
        <Col md={{ size: 8, offset: 2 }}>
          <Progress
            color="primary"
            value={myCounter}
            style={{ height: '25%', borderRadius: '500px' }}
          >
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

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Progress } from 'reactstrap';
import styles from './CombatArena.module.css';

function CombatArenaProgressAdversary({ name, powerstats }) {
  return (
    <>
      <Row className="m-1">
        <Col className={styles.name}>
          <h4 className={styles.h4}>{name}</h4>
        </Col>
      </Row>
      <Row>
        <Col>Strength</Col>
        <Col>
          <Progress value={powerstats && powerstats.strength} />
        </Col>
        <Col>Speed</Col>
        <Col>
          <Progress value={powerstats && powerstats.speed} />
        </Col>
      </Row>
      <Row>
        <Col>Power</Col>
        <Col>
          <Progress value={powerstats && powerstats.power} />
        </Col>
        <Col>Combat</Col>
        <Col>
          <Progress value={powerstats && powerstats.combat} />
        </Col>
      </Row>
    </>
  );
}
CombatArenaProgressAdversary.propTypes = {
  name: PropTypes.string.isRequired,
  powerstats: PropTypes.string.isRequired,
};

export default CombatArenaProgressAdversary;

import React from 'react';
import { Progress, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import styles from './CombatArena.module.css';

function CombatArenaProgress({ name, powerstats }) {
  return (
    <>
      <Row className="m-1">
        <Col>
          <h4 className={styles.h4}>{name}</h4>
        </Col>
      </Row>
      <Row>
        <Col>Force</Col>
        <Col>
          <Progress value={powerstats && powerstats.strength} />
        </Col>
        <Col>Vitesse</Col>
        <Col>
          <Progress value={powerstats && powerstats.speed} />
        </Col>
      </Row>
      <Row>
        <Col>Puissance</Col>
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
CombatArenaProgress.propTypes = {
  name: PropTypes.string.isRequired,
  powerstats: PropTypes.string.isRequired,
};

export default CombatArenaProgress;

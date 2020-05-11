import React from 'react';
import { Row, Col, Progress } from 'reactstrap';
import styles from './CardRules.module.css';

function CardRules() {
  return (
    <Row className={styles.card}>
      <Col xs={{ size: 4, offset: 1 }}>
        <img
          className={styles.persoImage}
          src="https://www.superherodb.com/pictures2/portraits/10/100/140.jpg"
          alt="Thor"
        />
      </Col>
      <Col xs="7">
        <h5 className={styles.cardTitle}>Thor</h5>
        <Row>
          <Col xs="4" className={styles.stat}>
            Intelligence
          </Col>
          <Col xs="5">
            <Progress value="69" max="100" />
          </Col>
        </Row>
        <Row>
          <Col xs="4" className={styles.stat}>
            Force
          </Col>
          <Col xs="5">
            <Progress value="100" max="100" />
          </Col>
        </Row>
        <Row>
          <Col xs="4" className={styles.stat}>
            Combat
          </Col>
          <Col xs="5">
            <Progress value="100" max="100" />
          </Col>
        </Row>
        <Row>
          <Col xs="4" className={styles.stat}>
            Vitesse
          </Col>
          <Col xs="5">
            <Progress value="83" max="100" />
          </Col>
        </Row>
        <Row>
          <Col xs="4" className={styles.stat}>
            Durabilité
          </Col>
          <Col xs="5">
            <Progress value="100" max="100" />
          </Col>
        </Row>
        <Row>
          <Col xs="4" className={styles.stat}>
            Puissance
          </Col>
          <Col xs="5">
            <Progress value="100" max="100" />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default CardRules;

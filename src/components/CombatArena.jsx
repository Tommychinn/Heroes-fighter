import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import styles from './CombatArena.module.css';
import CombatArenaBackground from './CombatArenaBackground';
import CombatArenaProgress from './CombatArenaProgress';
import CombatArenaCard from './CombatArenaCard';

function CombatArena() {
  return (
    <>
      <CombatArenaBackground />
      <Container>
        <Row>
          <Col className={styles.persoLevels} xs="5">
            <CombatArenaProgress name="Batman" />
          </Col>
          <Col className={styles.versus} xs="auto">
            <p>VS</p>
          </Col>
          <Col className={styles.persoLevels} xs="5">
            <CombatArenaProgress name="Black Lightning" />
          </Col>
        </Row>
      </Container>
      <Container className={styles.persoAttac}>
        <Row>
          <Col xs="5" className={styles.cardG}>
            <CombatArenaCard
              name="Batman"
              url="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
            />
          </Col>
          <Col className={styles.attac} xs="auto">
            <Button color="success">Attaque !</Button>
          </Col>
          <Col xs="5" className={styles.cardD}>
            <CombatArenaCard
              name="Black Lightning"
              url="https://www.superherodb.com/pictures2/portraits/10/100/1128.jpg"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CombatArena;

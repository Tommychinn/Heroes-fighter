import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col, Container } from 'reactstrap';

import styles from './letsGoContainer.module.css';

function LetsGoContainer() {
  return (
    <Container>
      <Card className={styles.img_bkg}>
        <Row className={styles.info_box}>
          <Col>
            <p className="textColor">HELLO HAVE FUN</p>
            <Button
              className={styles.button}
              tag={Link}
              to="./allPerso"
              variant="primary"
            >
              Choisi ton héros
            </Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default LetsGoContainer;

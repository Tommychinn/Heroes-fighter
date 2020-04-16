import React from 'react';
import { Button, Card, Row, Col, Container } from 'reactstrap';

import styles from './letsGoContainer.module.css';


const LetsGoContainer = () => (
    <Container>
        <Card className={styles.img_bkg}>
            <Row className={styles.info_box}>
                <Col>
                    <p className="textColor">HELLO HAVE FUN</p>
                    <Button variant="primary">LET’S GO</Button>
                </Col>
            </Row>
        </Card>
    </Container>
);







export default LetsGoContainer;


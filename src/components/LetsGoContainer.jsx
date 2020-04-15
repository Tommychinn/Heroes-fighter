import React from 'react';
import './LetsGoContainer.css';
import { Button, Card, Row, Col, Container } from 'reactstrap';


const LetsGoContainer = () => (
    <Container>
        <Card className='letsGoContainer justify-content-center '>
            <Row>
                <Col></Col>
                <Col>
                    <p className="textColor">HELLO JEAN CLAUDE ! HAVE FUN</p>
                    <Button variant="primary">LET’S GO</Button>
                </Col>

            </Row>
        </Card>
    </Container>
);







export default LetsGoContainer;


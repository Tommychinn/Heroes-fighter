import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody } from 'reactstrap';


const CardPersonnage = (props) => {

    return (
    <Card className="col-lg-2">
        <CardImg top width="100%" src={props.src} alt={props.alt} />
        <CardBody>
            <CardTitle>{props.CardTitle}</CardTitle>
            <CardSubtitle>{props.CardSubtitle}</CardSubtitle>
            <CardText>{props.CardText}</CardText>
            <Button>{props.Button}</Button>
        </CardBody>
    </Card>
    )
}

export default CardPersonnage


import React from "react";
import {
  Progress,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardBody,
  Row,
  Col,
} from "reactstrap";
import styles from "./Personnages.module.css";

function SlickPersoProps({ name, image, powerstats }) {
  return (
    <div className={styles.persoCartes}>
      <Card className={styles.perso}>
        <CardImg
          className={styles.persoImage}
          top
          width="100%"
          src={image && image.url}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle className={styles.cardTitle}>{name}</CardTitle>
          <Row className={styles.row}>
            <Col xs="5">
              <p>Intelligence</p>
            </Col>
            <Col xs="7">
              <Progress value={parseInt(powerstats.intelligence)} max="100" />
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col xs="5">Strength</Col>
            <Col xs="7">
              <Progress value={parseInt(powerstats.strength)} max="100" />
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col xs="5">Power</Col>
            <Col xs="7">
              <Progress value={parseInt(powerstats.power)} max="100" />
            </Col>
          </Row>
          <Button className={styles.button}>Play</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default SlickPersoProps;

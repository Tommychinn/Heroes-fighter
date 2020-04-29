import React from "react";
import {
  Row,
  Col,
  Button,
  Progress,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

import styles from "./SearchByName.module.css";

function SearchByName({ name, powerstats, image }) {
  let powerstat = Object.keys(powerstats)
    .map((stat) => [stat, powerstats[stat]])
    .slice(0, 3);

  return (
    <Col xs="3">
      <Card className={styles.card}>
        <CardImg
          className={styles.persoImg}
          top
          width="100%"
          src={image && image.url}
          alt="Card image cap"
        />
        <CardBody className={styles.cardbody}>
          <CardTitle className={styles.cardTitle}>{name}</CardTitle>
          <CardText>
            {powerstat.map((stat) => (
              <Row>
                <Col xs="6" className={styles.stat}>
                  {(stat[0] + "").charAt(0).toUpperCase() + stat[0].substr(1)}
                </Col>
                <Col xs="6">
                  <Progress value={parseInt(stat[1])} max="100" />
                </Col>
              </Row>
            ))}
          </CardText>
          <Button className={styles.button}>Play</Button>
        </CardBody>
      </Card>
    </Col>
  );
}

export default SearchByName;

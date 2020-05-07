import React from 'react';
import PropTypes from 'prop-types';

import {
  Progress,
  Card,
  CardImg,
  CardTitle,
  CardBody,
  Row,
  Col,
  CardText,
} from 'reactstrap';
import ModalDetailsPerso from './ModalDetailsPerso';
import styles from './Personnages.module.css';

function SlickPersoProps({ name, image, powerstats, biography, id }) {
  const powerstat = Object.keys(powerstats)
    .map((stat) => [stat, powerstats[stat]])
    .slice(0, 3);

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
        <CardBody className={styles.cardbody}>
          <CardTitle className={styles.cardTitle}>{name}</CardTitle>
          <CardText>
            {powerstat.map((stat) => (
              <Row>
                <Col xs="5" className={styles.stat}>
                  {stat[0].charAt(0).toUpperCase() + stat[0].substr(1)}
                </Col>
                <Col xs="7">
                  <Progress value={parseInt(stat[1], 10)} max="100" />
                </Col>
              </Row>
            ))}
          </CardText>
          <ModalDetailsPerso
            image={image}
            name={name}
            powerstats={powerstats}
            biography={biography}
            id={id}
          />
        </CardBody>
      </Card>
    </div>
  );
}
SlickPersoProps.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  powerstats: PropTypes.string.isRequired,
  biography: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default SlickPersoProps;

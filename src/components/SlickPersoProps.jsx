import React from 'react';
import PropTypes from 'prop-types';

import {
  Progress,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardBody,
} from 'reactstrap';
import styles from './Personnages.module.css';
import ModalDetailsPerso from './ModalDetailsPerso';

function SlickPersoProps({ image, name, powerstats, biography }) {
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
          <div>
            <p>Intelligence</p>
            <Progress value="3" max="5" />
          </div>
          <div>
            <p>Strength</p>
            <div>
              <Progress value="2" max="5" />
            </div>
          </div>
          <div>
            <p>Power</p>
            <div>
              <Progress value="4" max="5" />
            </div>
          </div>
          <Button className={styles.button}>Play</Button>
          <ModalDetailsPerso
            powerstats={powerstats}
            name={name}
            image={image}
            biography={biography}
          />
        </CardBody>
      </Card>
    </div>
  );
}
SlickPersoProps.propTypes = {
  name: PropTypes.string.isRequired,
  powerstats: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  biography: PropTypes.string.isRequired,
};

export default SlickPersoProps;

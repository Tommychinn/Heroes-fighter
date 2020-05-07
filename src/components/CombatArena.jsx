import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'reactstrap';
import Axios from 'axios';

import styles from './CombatArena.module.css';
import CombatArenaBackground from './CombatArenaBackground';
import CombatArenaProgress from './CombatArenaProgress';
import CombatArenaCard from './CombatArenaCard';

class CombatArena extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroId: [],
    };
  }

  componentDidMount() {
    this.getHeroId();
  }

  getHeroId() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    Axios.get(
      `https://www.superheroapi.com/api.php/2564696700461860/${id}`
    ).then(({ data }) => this.setState({ heroId: data }));
  }

  render() {
    const { heroId } = this.state;
    return (
      <>
        <CombatArenaBackground />
        <Container>
          <Row>
            <Col className={styles.persoLevels} xs="5">
              <CombatArenaProgress
                name={heroId.name}
                powerstats={heroId.powerstats}
              />
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
                name={heroId.name}
                url={heroId.image && heroId.image.url}
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
}
CombatArena.propTypes = {
  id: PropTypes.string.isRequired,
  match: PropTypes.string.isRequired,
};
export default CombatArena;

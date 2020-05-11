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
      adversary: [],
    };
  }

  componentDidMount() {
    this.getHeroId();
    this.getAdversary();
  }

  getHeroId() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    Axios.get(
      `https://www.superheroapi.com/api.php/2564696700461860/${id}`
    ).then(({ data }) => this.setState({ heroId: data }));
  }

  getAdversary() {
    Axios.get(
      `https://www.superheroapi.com/api.php/2564696700461860/${Math.floor(
        Math.random() * 732
      )}`
    ).then(({ data }) => {
      this.setState({ adversary: data });
    });
  }

  render() {
    const { heroId, adversary } = this.state;
    return (
      <div className={styles.arene}>
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
              <CombatArenaProgress
                name={adversary.name}
                powerstats={adversary.powerstats}
              />
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
                name={adversary.name}
                url={adversary.image && adversary.image.url}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
CombatArena.propTypes = {
  id: PropTypes.string.isRequired,
  match: PropTypes.string.isRequired,
};
export default CombatArena;

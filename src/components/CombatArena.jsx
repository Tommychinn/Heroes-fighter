import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Progress } from 'reactstrap';
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
      counterAdversary: '100',
      myCounter: '100',
    };
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDeath = this.handleDeath.bind(this);
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

  handleAttack() {
    const { counterAdversary, myCounter } = this.state;
    if (counterAdversary >= 30) {
      this.setState({
        counterAdversary: counterAdversary - Math.floor(Math.random() * 30),
      });
    } else {
      this.setState({
        counterAdversary: counterAdversary - counterAdversary,
      });
    }
    setTimeout(() => {
      this.setState({
        myCounter: myCounter - Math.floor(Math.random() * 50),
      });
    }, 3000);
  }

  handleDeath() {
    const { counterAdversary, myCounter } = this.state;
    this.setState({
      counterAdversary: counterAdversary - 45,
      myCounter: myCounter - 10,
    });
  }

  render() {
    const { heroId, adversary, counterAdversary, myCounter } = this.state;
    return (
      <div className={styles.arene}>
        <CombatArenaBackground />
        <Container>
          <Row className="justify-content-center">
            <Col className={styles.persoLevels} xs="4">
              <CombatArenaProgress
                name={heroId.name}
                powerstats={heroId.powerstats}
                myCounter={myCounter}
              />
            </Col>
            <Col className={styles.versus} xs="2">
              <p>VS</p>
            </Col>
            <Col className={styles.persoLevels} xs="4">
              <Row className="m-3">
                <Col className={styles.name}>
                  <p>{adversary.name}</p>
                </Col>
              </Row>
              <Row>
                <Col className={styles.vie}>
                  <Progress color="primary" value={counterAdversary}>
                    Vie
                  </Progress>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container className={styles.persoAttac}>
          <Row className="justify-content-center">
            <Col xs="4" className={styles.cardG}>
              <CombatArenaCard
                name={heroId.name}
                url={heroId.image && heroId.image.url}
                handleAttack={this.handleAttack}
                handleDeath={this.handleDeath}
              />
            </Col>
            <Col xs={{ size: 4, offset: 2 }} className={styles.cardD}>
              <Row
                style={{
                  backgroundImage: `url(${
                    adversary.image && adversary.image.url
                  })`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  height: '65vh',
                  borderRadius: '50px',
                }}
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

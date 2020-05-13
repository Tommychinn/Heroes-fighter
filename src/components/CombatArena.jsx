import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Progress, Spinner } from 'reactstrap';
import Axios from 'axios';
import Fade from 'react-reveal/Fade';

import styles from './CombatArena.module.css';
import CombatArenaBackground from './CombatArenaBackground';
import CombatArenaProgress from './CombatArenaProgress';
import CombatArenaCard from './CombatArenaCard';
import EndModalWinner from './EndModalWinner';
import CombatArenaProgressAdversary from './CombatArenaProgressAdversary';

class CombatArena extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroId: [],
      adversary: [],
      counterAdversary: '100',
      myCounter: '100',
      attackClickable: true,
      disabled: '',
      triggerModal: false,
      isLoading: true,
    };
    this.handleAttackStrength = this.handleAttackStrength.bind(this);
    this.handleAttackSpeed = this.handleAttackSpeed.bind(this);
    this.handleAttackCombat = this.handleAttackCombat.bind(this);
    this.handleAttackPower = this.handleAttackPower.bind(this);
  }

  componentDidMount() {
    this.getHeroId();
    this.getAdversary();
  }

  getAdversary() {
    Axios.get(
      `https://www.superheroapi.com/api.php/2564696700461860/${Math.floor(
        Math.random() * 732
      )}`
    )
      .then(({ data }) => {
        this.setState({ adversary: data });
        const { adversary } = this.state;
        if (
          (adversary.powerstats && adversary.powerstats.strength) === 'null' ||
          (adversary.powerstats && adversary.powerstats.speed) === 'null' ||
          (adversary.powerstats && adversary.powerstats.combat) === 'null' ||
          (adversary.powerstats && adversary.powerstats.power) === 'null'
        ) {
          this.getAdversary();
        }
      })
      .catch((err) => {
        this.setState({
          error: err,
        });
      })
      .finally(() =>
        this.setState({
          isLoading: false,
        })
      );
  }

  getHeroId() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    Axios.get(
      `https://www.superheroapi.com/api.php/2564696700461860/${id}`
    ).then(({ data }) => this.setState({ heroId: data }));
  }

  toggleButton() {
    const { attackClickable } = this.state;
    this.setState({ attackClickable: !attackClickable });
  }

  handleAttackStrength() {
    const { counterAdversary, myCounter } = this.state;
    if (counterAdversary > 0 && myCounter > 0) {
      this.attack('strength', 'speed');
    }
  }

  handleAttackSpeed() {
    const { counterAdversary, myCounter } = this.state;
    if (counterAdversary > 0 && myCounter > 0) {
      this.attack('speed', 'combat');
    }
  }

  handleAttackCombat() {
    const { counterAdversary, myCounter } = this.state;
    if (counterAdversary > 0 && myCounter > 0) {
      this.attack('combat', 'power');
    }
  }

  handleAttackPower() {
    const { counterAdversary, myCounter } = this.state;
    if (counterAdversary > 0 && myCounter > 0) {
      this.attack('power', 'strength');
    }
  }

  attack(attackName, defendName) {
    const { heroId, adversary, counterAdversary } = this.state;
    const value =
      (heroId.powerstats[attackName] - adversary.powerstats[attackName]) / 2;
    const shouldModalTrigger = counterAdversary - value <= 0;

    if (value > 0) {
      this.setState((state) => ({
        ...state,
        counterAdversary: counterAdversary - value,
        attackClickable: false,
        triggerModal: shouldModalTrigger,
      }));
    } else if (value <= 0) {
      if (value > -20) {
        this.setState((state) => ({
          ...state,
          counterAdversary: counterAdversary - 5,
          attackClickable: false,
          triggerModal: shouldModalTrigger,
        }));
      } else if (value > -40) {
        this.setState((state) => ({
          ...state,
          counterAdversary: counterAdversary - 10,
          attackClickable: false,
          triggerModal: shouldModalTrigger,
        }));
      } else if (value > -60) {
        this.setState((state) => ({
          ...state,
          counterAdversary: counterAdversary - 15,
          attackClickable: false,
          triggerModal: shouldModalTrigger,
        }));
      } else if (value <= 0) {
        this.setState((state) => ({
          ...state,
          counterAdversary: counterAdversary - 20,
          attackClickable: false,
          triggerModal: shouldModalTrigger,
        }));
      }
    }
    if (!shouldModalTrigger) {
      setTimeout(() => this.defend(defendName), 1500);
    }
  }

  defend(attackName) {
    const { heroId, adversary, myCounter } = this.state;
    const value =
      (adversary.powerstats[attackName] - heroId.powerstats[attackName]) / 2;
    const shouldModalTrigger = myCounter - value <= 0;

    if (value > 0) {
      this.setState((state) => ({
        ...state,
        myCounter: myCounter - value,
        attackClickable: true,
        triggerModal: shouldModalTrigger,
      }));
    } else if (value <= 0) {
      if (value > -20) {
        this.setState((state) => ({
          ...state,
          myCounter: myCounter - 5,
          attackClickable: true,
          triggerModal: shouldModalTrigger,
        }));
      } else if (value > -40) {
        this.setState((state) => ({
          ...state,
          myCounter: myCounter - 10,
          attackClickable: true,
          triggerModal: shouldModalTrigger,
        }));
      } else if (value > -60) {
        this.setState((state) => ({
          ...state,
          myCounter: myCounter - 15,
          attackClickable: true,
          triggerModal: shouldModalTrigger,
        }));
      } else if (value <= 0) {
        this.setState((state) => ({
          ...state,
          myCounter: myCounter - 20,
          attackClickable: true,
          triggerModal: shouldModalTrigger,
        }));
      }
    }
  }

  // attack() {
  //   const { counterAdversary } = this.state;
  //   const value = Math.floor(Math.random() * 30);
  //   const shouldModalTrigger = counterAdversary - value <= 0;
  //   this.setState((state) => ({
  //     ...state,
  //     counterAdversary: state.counterAdversary - value,
  //     attackClickable: false,
  //     triggerModal: shouldModalTrigger,
  //   }));
  //   if (!shouldModalTrigger) {
  //     setTimeout(() => this.defend(), 1500);
  //   }
  // }

  // defend() {
  //   const { myCounter } = this.state;
  //   const value = Math.floor(Math.random() * 30);
  //   const shouldModalTrigger = myCounter - value <= 0;
  //   this.setState((state) => ({
  //     ...state,
  //     myCounter: state.myCounter - value,
  //     attackClickable: true,
  //     triggerModal: shouldModalTrigger,
  //   }));
  // }

  render() {
    const {
      heroId,
      adversary,
      counterAdversary,
      myCounter,
      attackClickable,
      disabled,
      triggerModal,
      isLoading,
      error,
    } = this.state;
    if (isLoading)
      return (
        <div>
          <Spinner color="dark" />
          <Spinner color="light" type="grow" />
          <Spinner color="info" />
          <Spinner color="warning" type="grow" />
          <Spinner color="danger" />
          <Spinner color="success" type="grow" />
          <Spinner color="secondary" />
          <Spinner color="primary" type="grow" />
        </div>
      );
    if (error) return <div>Error...</div>;
    return (
      <div className={styles.arene}>
        <CombatArenaBackground />
        <Container>
          <Row className="justify-content-center">
            <Fade left className={styles.fade}>
              <Col className={styles.persoLevels} xs="4">
                <CombatArenaProgress
                  name={heroId.name}
                  powerstats={heroId.powerstats}
                  myCounter={myCounter}
                />
              </Col>
            </Fade>
            <Col className={styles.versus} xs="2">
              <p>VS</p>
            </Col>
            <Fade right className={styles.fade}>
              <Col className={styles.persoLevels} xs="4">
                <CombatArenaProgressAdversary
                  name={adversary.name}
                  powerstats={adversary.powerstats}
                />
              </Col>
            </Fade>
          </Row>
        </Container>
        <Container className={styles.persoAttac}>
          <Row className="justify-content-center">
            <Col xs="4" className={styles.cardG}>
              <CombatArenaCard
                name={heroId.name}
                url={heroId.image && heroId.image.url}
                handleAttackStrength={this.handleAttackStrength}
                handleAttackSpeed={this.handleAttackSpeed}
                handleAttackCombat={this.handleAttackCombat}
                handleAttackPower={this.handleAttackPower}
                attackClickable={attackClickable}
                disabled={disabled}
                myCounter={myCounter}
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
              >
                <Col
                  style={{ height: '15%', paddingTop: '5%' }}
                  md={{ size: 8, offset: 2 }}
                >
                  <Progress
                    color={
                      counterAdversary >= 50
                        ? 'success'
                        : counterAdversary >= 20
                        ? 'warning'
                        : counterAdversary >= 0
                        ? 'danger'
                        : ''
                    }
                    value={counterAdversary <= 0 ? '0' : counterAdversary}
                    style={{ height: '25%', borderRadius: '500px' }}
                  >
                    {counterAdversary}
                  </Progress>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <EndModalWinner
          isOpen={triggerModal}
          myCounter={myCounter}
          counterAdversary={counterAdversary}
        />
      </div>
    );
  }
}
CombatArena.propTypes = {
  id: PropTypes.string.isRequired,
  match: PropTypes.string.isRequired,
};
export default CombatArena;

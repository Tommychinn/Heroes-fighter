import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Progress, Spinner } from 'reactstrap';
import { Flash } from 'react-motions';
import Axios from 'axios';
import Fade from 'react-reveal/Fade';

import styles from './CombatArena.module.css';
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
      sentence1: false,
      sentence2: false,
      attack: '',
      defend: '',
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
    const { heroId, adversary, counterAdversary, sentence1 } = this.state;
    const value =
      (heroId.powerstats[attackName] - adversary.powerstats[attackName]) / 2;
    const shouldModalTrigger = counterAdversary - value <= 0;
    this.setState({ sentence1: !sentence1, attack: attackName });
    if (value > 0) {
      this.setState((state) => ({
        ...state,
        counterAdversary: counterAdversary - value,
        attackClickable: false,
        disabled: 'disabled',
        triggerModal: shouldModalTrigger,
      }));
    } else if (value <= 0) {
      if (value > -20) {
        this.setState((state) => ({
          ...state,
          counterAdversary: counterAdversary - 5,
          attackClickable: false,
          disabled: 'disabled',
          triggerModal: shouldModalTrigger,
        }));
      } else if (value > -40) {
        this.setState((state) => ({
          ...state,
          counterAdversary: counterAdversary - 10,
          attackClickable: false,
          disabled: 'disabled',
          triggerModal: shouldModalTrigger,
        }));
      } else if (value > -60) {
        this.setState((state) => ({
          ...state,
          counterAdversary: counterAdversary - 15,
          attackClickable: false,
          disabled: 'disabled',
          triggerModal: shouldModalTrigger,
        }));
      } else if (value <= 0) {
        this.setState((state) => ({
          ...state,
          counterAdversary: counterAdversary - 20,
          attackClickable: false,
          disabled: 'disabled',
          triggerModal: shouldModalTrigger,
        }));
      }
    }
    setTimeout(() => this.setState({ sentence1: false }), 2000);
    if (!shouldModalTrigger) {
      setTimeout(() => this.defend(defendName), 2500);
    }
  }

  defend(attackName) {
    const { heroId, adversary, myCounter, sentence2 } = this.state;
    const value =
      (adversary.powerstats[attackName] - heroId.powerstats[attackName]) / 2;
    const shouldModalTrigger = myCounter - value <= 0;
    this.setState({ sentence2: !sentence2, defend: attackName });
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
    setTimeout(() => this.setState({ sentence2: false }), 2500);
    this.setState({ disabled: '' });
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
      sentence1,
      sentence2,
      attack,
      defend,
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
        <Container className={styles.background} fluid>
          <Row className="justify-content-center">
            <Col className={`${styles.persoLevels} mt-5`} xs="10" md="3">
              <Fade left className={styles.fade}>
                <CombatArenaProgress
                  name={heroId.name}
                  powerstats={heroId.powerstats}
                  myCounter={myCounter}
                />
              </Fade>
            </Col>

            <Col className={`${styles.versus} mt-5`} xs="1" md="2">
              <p>VS</p>
            </Col>

            <Col className={`${styles.persoLevels} mt-5`} xs="10" md="3">
              <Fade right className={styles.fade}>
                <CombatArenaProgressAdversary
                  name={adversary.name}
                  powerstats={adversary.powerstats}
                />
              </Fade>
            </Col>
          </Row>
          <Row className={`${styles.persoAttac} justify-content-center`}>
            <Col xs="10" md="3" className={`${styles.cardG} mt-5`}>
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
            <Col
              xs="10"
              md={{ size: 3, offset: 2 }}
              className={`${styles.cardD}  mt-5`}
            >
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
                <Col md={{ size: 8, offset: 2 }}>
                  {counterAdversary <= 20 ? (
                    <Flash duration={3} infinite>
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
                        style={{
                          height: '9%',
                          borderRadius: '500px',
                          marginTop: '5%',
                        }}
                      >
                        {counterAdversary}
                      </Progress>
                    </Flash>
                  ) : (
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
                      style={{
                        height: '5%',
                        borderRadius: '500px',
                        marginTop: '5%',
                      }}
                    >
                      {counterAdversary}
                    </Progress>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <EndModalWinner
          isOpen={triggerModal}
          myCounter={myCounter}
          counterAdversary={counterAdversary}
          nameAdversary={adversary.name}
          name={heroId.name}
        />
        <div className={styles.sentences}>
          {sentence2 ? (
            <Fade right>
              <h3 className={styles.h2}>
                <b className={styles.name2}>{adversary.name}</b> attack with{' '}
                {defend}
              </h3>
            </Fade>
          ) : (
            ''
          )}
          {sentence1 ? (
            <Fade left>
              <h3 className={styles.h2}>
                <b>
                  <span className={styles.name2}>{heroId.name}</span>
                </b>{' '}
                attack with {attack}
              </h3>
            </Fade>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}
CombatArena.propTypes = {
  id: PropTypes.string.isRequired,
  match: PropTypes.string.isRequired,
};
export default CombatArena;

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
      this.attackStrength();
    }
  }

  handleAttackSpeed() {
    const { counterAdversary, myCounter } = this.state;
    if (counterAdversary > 0 && myCounter > 0) {
      this.attackSpeed();
    }
  }

  handleAttackCombat() {
    const { counterAdversary, myCounter } = this.state;
    if (counterAdversary > 0 && myCounter > 0) {
      this.attackCombat();
    }
  }

  handleAttackPower() {
    const { counterAdversary, myCounter } = this.state;
    if (counterAdversary > 0 && myCounter > 0) {
      this.attackPower();
    }
  }

  attackStrength() {
    const { heroId, adversary, counterAdversary } = this.state;
    if (heroId.powerstats.strength >= adversary.powerstats.strength) {
      const difference =
        heroId.powerstats.strength - adversary.powerstats.strength;
      this.setState({
        counterAdversary: counterAdversary - difference / 2,
      });
    } else if (heroId.powerstats.strength <= adversary.powerstats.strength) {
      const difference2 =
        adversary.powerstats.strength - heroId.powerstats.strength;
      if (difference2 < 20) {
        this.setState({ counterAdversary: counterAdversary - 20 });
      } else if (difference2 < 40) {
        this.setState({ counterAdversary: counterAdversary - 10 });
      } else if (difference2 < 60) {
        this.setState({ counterAdversary: counterAdversary - 5 });
      } else {
        this.setState({ counterAdversary: counterAdversary - 2 });
      }
    }
    if (counterAdversary <= 0) {
      this.setState({ counterAdversary: 0 });
    }
    this.verificationLifeStrength();
  }

  attackSpeed() {
    const { heroId, adversary, counterAdversary } = this.state;
    if (heroId.powerstats.speed >= adversary.powerstats.speed) {
      const difference = heroId.powerstats.speed - adversary.powerstats.speed;
      this.setState({
        counterAdversary: counterAdversary - difference / 2,
      });
    } else if (heroId.powerstats.speed <= adversary.powerstats.speed) {
      const difference2 = adversary.powerstats.speed - heroId.powerstats.speed;
      if (difference2 < 20) {
        this.setState({ counterAdversary: counterAdversary - 20 });
      } else if (difference2 < 40) {
        this.setState({ counterAdversary: counterAdversary - 10 });
      } else if (difference2 < 60) {
        this.setState({ counterAdversary: counterAdversary - 5 });
      } else {
        this.setState({ counterAdversary: counterAdversary - 2 });
      }
    }
    if (counterAdversary <= 0) {
      this.setState({ counterAdversary: 0 });
    }
    this.verificationLifeSpeed();
  }

  attackPower() {
    const { heroId, adversary, counterAdversary } = this.state;
    if (heroId.powerstats.power >= adversary.powerstats.power) {
      const difference = heroId.powerstats.power - adversary.powerstats.power;
      this.setState({
        counterAdversary: counterAdversary - difference / 2,
      });
    } else if (heroId.powerstats.power <= adversary.powerstats.power) {
      const difference2 = adversary.powerstats.power - heroId.powerstats.power;
      if (difference2 < 20) {
        this.setState({ counterAdversary: counterAdversary - 20 });
      } else if (difference2 < 40) {
        this.setState({ counterAdversary: counterAdversary - 10 });
      } else if (difference2 < 60) {
        this.setState({ counterAdversary: counterAdversary - 5 });
      } else {
        this.setState({ counterAdversary: counterAdversary - 2 });
      }
    }
    if (counterAdversary <= 0) {
      this.setState({ counterAdversary: 0 });
    }
    this.verificationLifePower();
  }

  attackCombat() {
    const { heroId, adversary, counterAdversary } = this.state;
    if (heroId.powerstats.combat >= adversary.powerstats.combat) {
      const difference = heroId.powerstats.combat - adversary.powerstats.combat;
      this.setState({
        counterAdversary: counterAdversary - difference / 2,
      });
    } else if (heroId.powerstats.combat <= adversary.powerstats.combat) {
      const difference2 =
        adversary.powerstats.combat - heroId.powerstats.combat;
      if (difference2 < 20) {
        this.setState({ counterAdversary: counterAdversary - 20 });
      } else if (difference2 < 40) {
        this.setState({ counterAdversary: counterAdversary - 10 });
      } else if (difference2 < 60) {
        this.setState({ counterAdversary: counterAdversary - 5 });
      } else {
        this.setState({ counterAdversary: counterAdversary - 2 });
      }
    }
    if (counterAdversary <= 0) {
      this.setState({ counterAdversary: 0 });
    }
    this.verificationLifeCombat();
  }

  verificationLifeStrength() {
    const { counterAdversary, myCounter } = this.state;
    if (counterAdversary <= 0) {
      this.setState({ counterAdversary: 0 });
    } else if (myCounter <= 0) {
      this.setState({ myCounter: 0 });
    } else {
      setTimeout(() => this.defendSpeed(), 1500);
    }
  }

  verificationLifeSpeed() {
    const { counterAdversary, myCounter } = this.state;
    if (counterAdversary <= 0) {
      this.setState({ counterAdversary: 0 });
    } else if (myCounter <= 0) {
      this.setState({ myCounter: 0 });
    } else {
      setTimeout(() => this.defendCombat(), 1500);
    }
  }

  verificationLifeCombat() {
    const { counterAdversary, myCounter } = this.state;
    if (counterAdversary <= 0) {
      this.setState({ counterAdversary: 0 });
    } else if (myCounter <= 0) {
      this.setState({ myCounter: 0 });
    } else {
      setTimeout(() => this.defendPower(), 1500);
    }
  }

  verificationLifePower() {
    const { counterAdversary, myCounter } = this.state;
    if (counterAdversary <= 0) {
      this.setState({ counterAdversary: 0 });
    } else if (myCounter <= 0) {
      this.setState({ myCounter: 0 });
    } else {
      setTimeout(() => this.defendStrength(), 1500);
    }
  }

  defendStrength() {
    const { heroId, adversary, myCounter } = this.state;
    if (adversary.powerstats.strength >= heroId.powerstats.strength) {
      const difference =
        adversary.powerstats.strength - heroId.powerstats.strength;
      this.setState({ myCounter: myCounter - difference / 2 });
    } else if (adversary.powerstats.strength <= heroId.powerstats.strength) {
      const difference2 =
        heroId.powerstats.strength - adversary.powerstats.strength;
      if (difference2 < 20) {
        this.setState({ myCounter: myCounter - 20 });
      } else if (difference2 < 40) {
        this.setState({ myCounter: myCounter - 10 });
      } else if (difference2 < 60) {
        this.setState({ myCounter: myCounter - 5 });
      } else {
        this.setState({ myCounter: myCounter - 2 });
      }
    }
    if (myCounter <= 0) {
      this.setState({ myCounter: 0 });
    }
  }

  defendSpeed() {
    const { heroId, adversary, myCounter } = this.state;
    if (adversary.powerstats.speed >= heroId.powerstats.speed) {
      const difference = adversary.powerstats.speed - heroId.powerstats.speed;
      this.setState({ myCounter: myCounter - difference / 2 });
    } else if (adversary.powerstats.speed <= heroId.powerstats.speed) {
      const difference2 = heroId.powerstats.speed - adversary.powerstats.speed;
      if (difference2 < 20) {
        this.setState({ myCounter: myCounter - 20 });
      } else if (difference2 < 40) {
        this.setState({ myCounter: myCounter - 10 });
      } else if (difference2 < 60) {
        this.setState({ myCounter: myCounter - 5 });
      } else {
        this.setState({ myCounter: myCounter - 2 });
      }
    }
    if (myCounter <= 0) {
      this.setState({ myCounter: 0 });
    }
  }

  defendPower() {
    const { heroId, adversary, myCounter } = this.state;
    if (adversary.powerstats.power >= heroId.powerstats.power) {
      const difference = adversary.powerstats.power - heroId.powerstats.power;
      this.setState({ myCounter: myCounter - difference / 2 });
    } else if (adversary.powerstats.power <= heroId.powerstats.power) {
      const difference2 = heroId.powerstats.power - adversary.powerstats.power;
      if (difference2 < 20) {
        this.setState({ myCounter: myCounter - 20 });
      } else if (difference2 < 40) {
        this.setState({ myCounter: myCounter - 10 });
      } else if (difference2 < 60) {
        this.setState({ myCounter: myCounter - 5 });
      } else {
        this.setState({ myCounter: myCounter - 2 });
      }
    }
    if (myCounter <= 0) {
      this.setState({ myCounter: 0 });
    }
  }

  defendCombat() {
    const { heroId, adversary, myCounter } = this.state;
    if (adversary.powerstats.combat >= heroId.powerstats.combat) {
      const difference = adversary.powerstats.combat - heroId.powerstats.combat;
      this.setState({ myCounter: myCounter - difference / 2 });
    } else if (adversary.powerstats.combat <= heroId.powerstats.combat) {
      const difference2 =
        heroId.powerstats.combat - adversary.powerstats.combat;
      if (difference2 < 20) {
        this.setState({ myCounter: myCounter - 20 });
      } else if (difference2 < 40) {
        this.setState({ myCounter: myCounter - 10 });
      } else if (difference2 < 60) {
        this.setState({ myCounter: myCounter - 5 });
      } else {
        this.setState({ myCounter: myCounter - 2 });
      }
    }
    if (myCounter <= 0) {
      this.setState({ myCounter: 0 });
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
                <Row className="m-1">
                  <Col className={styles.name}>
                    <h4>{adversary.name}</h4>
                  </Col>
                </Row>
                <Row>
                  <Col>Force</Col>
                  <Col>
                    <Progress
                      value={
                        adversary.powerstats && adversary.powerstats.strength
                      }
                    />
                  </Col>
                  <Col>Vitesse</Col>
                  <Col>
                    <Progress
                      value={adversary.powerstats && adversary.powerstats.speed}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>Puissance</Col>
                  <Col>
                    <Progress
                      value={adversary.powerstats && adversary.powerstats.power}
                    />
                  </Col>
                  <Col>Combat</Col>
                  <Col>
                    <Progress
                      value={
                        adversary.powerstats && adversary.powerstats.combat
                      }
                    />
                  </Col>
                </Row>
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
                    value={counterAdversary}
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

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
import EndModalLooser from './EndModalLooser';

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
      isLoading: true,
    };
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDeath = this.handleDeath.bind(this);
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
    if (counterAdversary > 0) {
      setTimeout(() => {
        this.toggleButton();
        if (myCounter >= 30) {
          this.setState({
            myCounter: myCounter - Math.floor(Math.random() * 30),
          });
        } else {
          this.setState({
            myCounter: myCounter - myCounter,
          });
        }
      }, 1500);
    }
    this.toggleButton();
  }

  handleDeath() {
    const { counterAdversary, myCounter } = this.state;
    if (counterAdversary >= 30) {
      this.setState({
        counterAdversary: counterAdversary - 30,
        myCounter: myCounter - 10,
      });
    } else {
      this.setState({
        counterAdversary: counterAdversary - counterAdversary,
        myCounter: myCounter - 10,
      });
    }
    if (counterAdversary > 0) {
      setTimeout(() => {
        this.toggleButton();
        if (myCounter >= 30) {
          this.setState({
            myCounter: myCounter - Math.floor(Math.random() * 50),
          });
        } else {
          this.setState({
            myCounter: myCounter - myCounter,
          });
        }
      }, 1500);
    }
    this.toggleButton();
    this.setState({ disabled: 'disabled' });
  }

  render() {
    const {
      heroId,
      adversary,
      counterAdversary,
      myCounter,
      attackClickable,
      disabled,
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
                <Row className="m-3">
                  <Col className={styles.name}>
                    <p>{adversary.name}</p>
                  </Col>
                </Row>
                <Row>
                  <Col className={styles.vie}>
                    <Progress color="primary" value={counterAdversary}>
                      {counterAdversary}
                    </Progress>
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
                handleAttack={this.handleAttack}
                handleDeath={this.handleDeath}
                attackClickable={attackClickable}
                disabled={disabled}
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
        {counterAdversary === 0 ? <EndModalWinner /> : ''}
        {myCounter === 0 ? <EndModalLooser /> : ''}
      </div>
    );
  }
}
CombatArena.propTypes = {
  id: PropTypes.string.isRequired,
  match: PropTypes.string.isRequired,
};
export default CombatArena;

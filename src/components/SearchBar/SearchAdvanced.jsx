import React, { Component } from "react";
import { Row, Col, UncontrolledCollapse } from "reactstrap";

import SearchCard from "./SearchCard";
import styles from "./SearchAdvanced.module.css";
import Axios from "axios";

class SearchAdvanced extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
    };
  }
  componentDidMount() {
    this.getHero();
  }

  getHero() {
    Axios.get("https://heroes-api-wrapper.herokuapp.com/heroes").then(
      ({ data }) => {
        this.setState({ heroes: data });
        console.log(this.state.heroes);
      }
    );
  }


  render() {
    const { heroes } = this.state;
    
    return (
      <Col className={styles.div}>
        <h4
          className={styles.h4}
          color="primary"
          style={{ marginBottom: "1rem" }}
          id="toggler0"
        >
          Recherche avancée
        </h4>
        <UncontrolledCollapse toggler="#toggler0">
          <Row>
            <Col>
              <h5 id="toggler" className={styles.h5}>
                Les plus intelligents
              </h5>
            </Col>
            <Col>
              <h5 id="toggler1" className={styles.h5}>
                Les plus forts
              </h5>
            </Col>
            <Col>
              <h5 id="toggler2" className={styles.h5}>
                Les plus puissants
              </h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 id="toggler3" className={styles.h5}>
                Les meilleurs au combat
              </h5>
            </Col>
            <Col>
              <h5 id="toggler4" className={styles.h5}>
                Les plus rapides
              </h5>
            </Col>
            <Col>
              <h5 id="toggler5" className={styles.h5}>
                Les plus tenaces
              </h5>
            </Col>
            <UncontrolledCollapse
              className={styles.collapse}
              toggler="#toggler"
            >
              <h6 className={styles.h6}>Les plus intelligents</h6>
              <Row>
                {heroes
                  .filter((hero) => hero.powerstats.intelligence > 95)
                  .map((hero) => {
                    return <SearchCard {...hero} />;
                  })}
              </Row>
            </UncontrolledCollapse>
            <UncontrolledCollapse
              className={styles.collapse}
              toggler="#toggler1"
            >
              <h6 className={styles.h6}>Les héros les plus forts</h6>
              <Row>
                {heroes
                  .filter((hero) => hero.powerstats.strength > 95)
                  .map((hero) => {
                    return <SearchCard {...hero} />;
                  })}
              </Row>
            </UncontrolledCollapse>
            <UncontrolledCollapse
              className={styles.collapse}
              toggler="#toggler2"
            >
              <h6 className={styles.h6}>Les héros les plus puissants</h6>
              <Row>
                {heroes
                  .filter((hero) => hero.powerstats.power > 95)
                  .map((hero) => {
                    return <SearchCard {...hero} />;
                  })}
              </Row>
            </UncontrolledCollapse>
            <UncontrolledCollapse
              className={styles.collapse}
              toggler="#toggler3"
            >
              <h6 className={styles.h6}>Les héros les meilleurs au combat</h6>
              <Row>
                {heroes
                  .filter((hero) => hero.powerstats.combat > 95)
                  .map((hero) => {
                    return <SearchCard {...hero} />;
                  })}
              </Row>
            </UncontrolledCollapse>
            <UncontrolledCollapse
              className={styles.collapse}
              toggler="#toggler4"
            >
              <h6 className={styles.h6}>Les héros les plus rapides</h6>
              <Row>
                {heroes
                  .filter((hero) => hero.powerstats.speed > 95)
                  .map((hero) => {
                    return <SearchCard {...hero} />;
                  })}
              </Row>
            </UncontrolledCollapse>
            <UncontrolledCollapse
              className={styles.collapse}
              toggler="#toggler5"
            >
              <h6 className={styles.h6}>Les héros les plus tenaces</h6>
              <Row>
                {heroes
                  .filter((hero) => hero.powerstats.durability > 95)
                  .map((hero) => {
                    return <SearchCard {...hero} />;
                  })}
              </Row>
            </UncontrolledCollapse>
          </Row>
        </UncontrolledCollapse>
      </Col>
    );
  }
}

export default SearchAdvanced;

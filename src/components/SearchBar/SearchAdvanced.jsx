import React, { Component } from "react";
import { Row, Col, UncontrolledCollapse } from "reactstrap";

import SearchCard from "./SearchCard";
import styles from "./SearchAdvanced.module.css";
import Axios from "axios";

const stat = [
  {id : "toggler", title : "plus intelligents", ID :"#toggler"},
  {id : "toggler1", title : "plus forts", ID :"#toggler1"},
  {id : "toggler2", title : "plus puissants", ID :"#toggler2"},
  {id : "toggler3", title : "meilleurs au combat", ID :"#toggler3"},
  {id : "toggler4", title : "plus rapides", ID :"#toggler4"},
  {id : "toggler5", title : "plus résistants", ID :"#toggler5"},
]
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
            {stat.map(stat => { return (
            <Col xs="4">
              <h5 id={stat.id} className={styles.h5}>
                Les {stat.title}
              </h5>
            </Col>
            )})
            }
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

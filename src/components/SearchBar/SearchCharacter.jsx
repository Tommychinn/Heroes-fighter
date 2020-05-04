import React, { Component } from "react";
import axios from "axios";
import { Row, Col, Label } from "reactstrap";
import { DebounceInput } from "react-debounce-input";

import SearchCard from "./SearchCard";
import styles from "./SearchCharacter.module.css";

class SearchCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      hero: [],
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  componentDidMount() {
    this.getHero();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.getHero(this.state.value);
    }
  }

  getHero() {
    const { value } = this.state;
    axios
      .get(`https://superheroapi.com/api.php/1274121622792743/search/${value}`)
      .then(({ data }) => {
        this.setState({ hero: data.results });
      });
  }

  render() {
    const { hero } = this.state;

    return (
      <div>
        <Row>
          <Col xs="5">
            <Label for="search"></Label>
            <DebounceInput
              className={styles.input}
              minLength={2}
              debounceTimeout={300}
              value={this.state.value}
              onChange={this.handleChange}
              name="text"
              id="search"
              placeholder="Recherche..."
            />
          </Col>

        </Row>
        <Row className={styles.searchresults}>
          {hero &&
            hero.map((hero) => {
              return <SearchCard {...hero} />;
            })}
        </Row>
      </div>
    );
  }
}

export default SearchCharacter;

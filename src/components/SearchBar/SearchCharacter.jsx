import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Label, Spinner } from 'reactstrap';
import { DebounceInput } from 'react-debounce-input';

import SlickPersoSearch from './SlickPersoSearch';
import styles from './SearchCharacter.module.css';

class SearchCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: [],
      value: '',
      isLoading: true,
      search: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getHero();
  }

  componentDidUpdate(prevProps, prevState) {
    const { value } = this.state;
    if (prevState.value !== value) {
      this.getHero(value);
    }
  }

  getHero() {
    const { value } = this.state;
    axios
      .get(`https://superheroapi.com/api.php/1274121622792743/search/${value}`)
      .then(({ data }) => {
        this.setState({ hero: data.results, search: true });
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

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const { hero, value, isLoading, error, search } = this.state;

    if (isLoading)
      return (
        <div>
          <Spinner color="primary" />
          <Spinner color="secondary" type="grow" />
          <Spinner color="success" />
          <Spinner color="danger" type="grow" />
          <Spinner color="warning" />
          <Spinner color="info" type="grow" />
          <Spinner color="light" />
          <Spinner color="dark" type="grow" />
        </div>
      );
    if (error) return <div>Error...</div>;
    return (
      <div>
        <Row>
          <Col xs="5">
            <Label for="search" />
            <DebounceInput
              className={styles.input}
              minLength={2}
              debounceTimeout={300}
              value={value}
              onChange={this.handleChange}
              name="text"
              id="search"
              placeholder="Search..."
            />
          </Col>
        </Row>
        <Row className={styles.searchresults}>
          {search === true
            ? hero === undefined
              ? 'Please enter a valid search!'
              : hero &&
                hero.map((character) => (
                  <SlickPersoSearch
                    name={character.name}
                    powerstats={character.powerstats}
                    image={character.image}
                    biography={character.biography}
                    id={character.id}
                  />
                ))
            : ''}
        </Row>
      </div>
    );
  }
}

export default SearchCharacter;

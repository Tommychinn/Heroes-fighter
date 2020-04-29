import React, { Component } from "react";
import axios from "axios";
import {
  Row,
  Col,
  Input,
  Label,
  Button,
  Collapse,
} from "reactstrap";

import SearchByName from './SearchByName'
import styles from "./SearchCharacter.module.css";

class SearchCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      hero: [],
      value: 0
    };
    this.setIsOpen = this.setIsOpen.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }
 

  
  handleChange(e){
    this.setState({value : e.target.value})
  }

  componentDidMount(){
    this.getHero()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.getHero(this.state.value);
    }
  }
  
  getHero() {
    const { value } = this.state
    axios
      .get(`https://superheroapi.com/api.php/1274121622792743/search/${value}`)
      .then(({ data }) => {
        this.setState({ hero: data.results })
        console.log(this.state.hero)
      });
  }

  setIsOpen() {
    this.setState({ isOpen: true });
  }

  
  toggle = () => this.setIsOpen(!this.state.isOpen);




  

  render() {
    const { isOpen, hero } = this.state;

    return (
      <div>
        <Row>
          <Col xs="3" className={styles.input}>
            <Label for="search"></Label>
            <Input type="text" value={this.state.value} onChange={this.handleChange} name="text" id="search" />
          </Col>
          <Col xs="1">
          <Button
              color="primary"
              onClick={this.toggle}
              style={{ marginBottom: "1rem" }}
            >
              OK
            </Button>
          </Col>
          <Collapse isOpen ={isOpen}>{
            hero && hero.map(hero => {
              return(<SearchByName {...hero}/>)})
              }
          </Collapse>
        </Row>
      </div>
    )
}
}

export default SearchCharacter;
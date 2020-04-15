import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "reactstrap";

import "./MenuRules.css";

function MenuRules() {
  return (
    <Row className="menu">
      <Col>
        <h4 className="gamerules">
          {" "}
          <img src="https://image.flaticon.com/icons/svg/2004/2004760.svg" />{" "}
          Game Rules
        </h4>
        <h6>
          <a href="#Goal">Goal of game</a>
        </h6>
        <h6>
          <a href="#Elements">Elements of game</a>
        </h6>
        <h6>
          <a href="#Course">Course of game</a>
        </h6>
        <h6>
          <a href="#End">End of game</a>
        </h6>
      </Col>
    </Row>
  );
}

export default MenuRules;

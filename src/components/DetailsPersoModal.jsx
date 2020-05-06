import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Progress } from 'reactstrap';

function DetailsPersoModal({ powerstats }) {
  const powerstat = Object.keys(powerstats).map((stat) => [
    stat,
    powerstats[stat],
  ]);

  return (
    <>
      {powerstat.map((stat) => (
        <Row>
          <Col>{stat[0]}</Col>
          <Col>
            <Progress value={parseInt(stat[1], 10)} max="100" />
          </Col>
        </Row>
      ))}
    </>
  );
}

DetailsPersoModal.propTypes = {
  powerstats: PropTypes.number.isRequired,
};

export default DetailsPersoModal;

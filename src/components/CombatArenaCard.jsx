import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'reactstrap';

function CombatArenaCard({ url, attackClickable, handleAttack, handleDeath }) {
  return (
    <>
      <Row
        style={{
          backgroundImage: `url(${url})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '65vh',
          borderRadius: '50px',
        }}
      >
        <Col className="align-self-end mb-5">
          <Button onClick={attackClickable ? handleAttack : ''} className="m-2">
            Attaque #1
          </Button>
          <Button onClick={attackClickable ? handleDeath : ''} className="m-2">
            The death
          </Button>
        </Col>
      </Row>
    </>
  );
}

CombatArenaCard.propTypes = {
  url: PropTypes.string.isRequired,
  handleAttack: PropTypes.string.isRequired,
  handleDeath: PropTypes.string.isRequired,
  attackClickable: PropTypes.bool.isRequired,
};

export default CombatArenaCard;

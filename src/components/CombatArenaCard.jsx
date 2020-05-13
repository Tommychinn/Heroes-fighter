import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col, Progress } from 'reactstrap';

function CombatArenaCard({
  url,
  attackClickable,
  handleAttack,
  handleDeath,
  disabled,
  myCounter,
}) {
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
        {/* <Row style={{ height: '100%' }}> */}
        <Col
          style={{ height: '15%', paddingTop: '5%' }}
          md={{ size: 8, offset: 2 }}
        >
          <Progress
            color="primary"
            value={myCounter}
            style={{ height: '25%', borderRadius: '500px' }}
          >
            {myCounter}
          </Progress>
        </Col>
        {/* </Row> */}
        <Row>
          <Col className="align-self-end mb-5">
            <Button
              onClick={attackClickable ? handleAttack : ''}
              className="m-2"
            >
              Attaque #1
            </Button>
            <Button
              disabled={disabled}
              onClick={attackClickable ? handleDeath : ''}
              className="m-2"
            >
              The death
            </Button>
          </Col>
        </Row>
      </Row>
    </>
  );
}

CombatArenaCard.propTypes = {
  url: PropTypes.string.isRequired,
  handleAttack: PropTypes.string.isRequired,
  handleDeath: PropTypes.string.isRequired,
  attackClickable: PropTypes.bool.isRequired,
  disabled: PropTypes.string.isRequired,
  myCounter: PropTypes.string.isRequired,
};

export default CombatArenaCard;

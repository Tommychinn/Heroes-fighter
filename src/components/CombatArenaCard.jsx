import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col, Progress } from 'reactstrap';

import { Flash } from 'react-motions';

import styles from './CombatArena.module.css';

function CombatArenaCard({
  url,
  attackClickable,
  handleAttackStrength,
  handleAttackSpeed,
  handleAttackCombat,
  handleAttackPower,
  myCounter,
  disabled,
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
        <Col md={{ size: 8, offset: 2 }}>
          {myCounter <= 20 ? (
            <Flash duration={3} infinite>
              <Progress
                color={
                  myCounter >= 50
                    ? 'success'
                    : myCounter >= 20
                    ? 'warning'
                    : myCounter >= 0
                    ? 'danger'
                    : ''
                }
                value={myCounter <= 0 ? '0' : myCounter}
                style={{
                  height: '15%',
                  borderRadius: '500px',
                  marginTop: '5%',
                }}
              >
                {myCounter}
              </Progress>
            </Flash>
          ) : (
            <Progress
              color={
                myCounter >= 50
                  ? 'success'
                  : myCounter >= 20
                  ? 'warning'
                  : myCounter >= 0
                  ? 'danger'
                  : ''
              }
              value={myCounter <= 0 ? '0' : myCounter}
              style={{ height: '15%', borderRadius: '500px', marginTop: '5%' }}
            >
              {myCounter}
            </Progress>
          )}
        </Col>
        {/* </Row> */}
        <Row>
          <Col className="align-self-end mb-5">
            <Button
              disabled={disabled}
              onClick={attackClickable ? handleAttackStrength : ''}
              className={`${styles.button} m-2`}
            >
              Strength
            </Button>
            <Button
              disabled={disabled}
              onClick={attackClickable ? handleAttackSpeed : ''}
              className={`${styles.button} m-2`}
            >
              Speed
            </Button>
            <Button
              disabled={disabled}
              onClick={attackClickable ? handleAttackPower : ''}
              className={`${styles.button} m-2`}
            >
              Power
            </Button>
            <Button
              disabled={disabled}
              onClick={attackClickable ? handleAttackCombat : ''}
              className={`${styles.button} m-2`}
            >
              Combat
            </Button>
          </Col>
        </Row>
      </Row>
    </>
  );
}

CombatArenaCard.propTypes = {
  url: PropTypes.string.isRequired,
  handleAttackSpeed: PropTypes.string.isRequired,
  handleAttackStrength: PropTypes.string.isRequired,
  handleAttackPower: PropTypes.string.isRequired,
  handleAttackCombat: PropTypes.string.isRequired,
  attackClickable: PropTypes.bool.isRequired,
  myCounter: PropTypes.string.isRequired,
  disabled: PropTypes.string.isRequired,
};

export default CombatArenaCard;

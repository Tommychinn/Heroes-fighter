import React from 'react';
import { Progress } from 'reactstrap';
import PropTypes from 'prop-types';
import styles from './CombatArena.module.css';

function CombatArenaProgress({ name, powerstats }) {
  return (
    <>
      <div className={styles.name}>
        <p>{name}</p>
      </div>
      <div className={styles.vie}>
        <Progress color="warning" value={75}>
          Vie
        </Progress>
      </div>
      <div className={styles.stats}>
        <Progress
          className={styles.statsProgress}
          value={powerstats && powerstats.intelligence}
        >
          Intelligence
        </Progress>
        <Progress
          className={styles.statsProgress}
          value={powerstats && powerstats.strength}
        >
          Strength
        </Progress>
        <Progress
          className={styles.statsProgress}
          value={powerstats && powerstats.speed}
        >
          Speed
        </Progress>
      </div>
      <div className={styles.stats}>
        <Progress
          className={styles.statsProgress}
          value={powerstats && powerstats.durability}
        >
          Durability
        </Progress>
        <Progress
          className={styles.statsProgress}
          value={powerstats && powerstats.power}
        >
          Power
        </Progress>
        <Progress
          className={styles.statsProgress}
          value={powerstats && powerstats.combat}
        >
          Combat
        </Progress>
      </div>
    </>
  );
}
CombatArenaProgress.propTypes = {
  name: PropTypes.string.isRequired,
  powerstats: PropTypes.string.isRequired,
};

export default CombatArenaProgress;

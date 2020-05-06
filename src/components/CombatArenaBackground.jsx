import React from 'react';
import Background from './arena-images/arena04.jpg';
import styles from './CombatArena.module.css';

function CombatArenaBackground() {
  return (
    <div className={styles.background}>
      <img src={Background} alt="background" />
    </div>
  );
}

export default CombatArenaBackground;

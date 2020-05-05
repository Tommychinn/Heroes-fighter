import React from "react";
import styles from './CombatArena.module.css';
import {Progress} from 'reactstrap';

function CombatArenaProgress(props) {
    return (
        <>
        <div className={styles.name}>
            <p>{props.name}</p>
        </div>
        <div className={styles.vie}>
            <Progress color="warning" value={75}>Vie</Progress>
        </div>
        <div className={styles.stats}>
            <Progress className={styles.statsProgress} value={75}>Intelligence</Progress>
            <Progress className={styles.statsProgress} value={100}>Strength</Progress>
            <Progress className={styles.statsProgress} value={100}>Speed</Progress>
        </div>
        <div className={styles.stats}>
            <Progress className={styles.statsProgress} value={65}>Durability</Progress>
            <Progress className={styles.statsProgress} value={90}>Power</Progress>
            <Progress className={styles.statsProgress} value={90}>Combat</Progress>
        </div>
        </>
    )
}

export default CombatArenaProgress;
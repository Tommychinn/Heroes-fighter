import React from 'react';
import NavBar from './NavBar';
import styles from './AreneContainer.module.css';
import arena01 from '././arena-images/arena01.jpg'

function AreneContainer() {
    return (
      <div className={styles.AreneContainer}>
        <NavBar />
        <div className={styles.body}>
            <img src={arena01} alt="arene" />        
        </div>
      </div>
    );
  }
  
  export default AreneContainer;
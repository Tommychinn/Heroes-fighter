import React from 'react';
import styles from "./NavBar.module.css";
import {  Nav,  NavItem,  NavLink,} from 'reactstrap';
import GameRules from './GameRules';
import { Link } from 'react-router-dom '




function NavBar () {
  return (       
    <div className={styles.navigation}>
            
      <Nav vertical>
         <NavItem className={styles.navlogo}>           
          <NavLink tag={Link} to={Link}>
            <img src="https://zupimages.net/up/20/16/ko7g.png" alt="home logo"></img>            
            </NavLink>
        </NavItem>
        <NavItem className={styles.navlink}>
          <NavLink>
          <img src="https://img.icons8.com/color/48/000000/hulk.png" alt="hulk logo player section"></img>
          
          </NavLink>
        </NavItem>       
        <GameRules />
      </Nav>    
    </div>
    
  );
}
export default NavBar;
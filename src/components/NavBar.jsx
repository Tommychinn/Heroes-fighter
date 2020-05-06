import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import styles from './NavBar.module.css';

import GameRules from './GameRules';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <div className={styles.navigation}>
      <Nav vertical>
        <NavItem className={styles.navlogo}>
          <NavLink href="#">
            <img
              src="https://zupimages.net/up/20/16/ko7g.png"
              alt="home logo"
            />
          </NavLink>
        </NavItem>
        <NavItem className={styles.navlink}>
          <NavLink href="#">
            <img
              src="https://img.icons8.com/color/48/000000/hulk.png"
              alt="hulk logo player section"
            />
          </NavLink>
        </NavItem>
        <GameRules />
      </Nav>
    </div>
  );
}
export default NavBar;

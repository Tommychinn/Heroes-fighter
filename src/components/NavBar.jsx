import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import GameRules from './GameRules';

import logo from './img/logo.png';
import hulk from './img/hulk.png';

function NavBar() {
  const itemNav = [
    { image: `${logo}`, title: 'home', link: '/' },
    { image: `${hulk}`, title: 'characters', link: '/characters' },
  ];
  return (
    <div className={styles.navigation}>
      <Nav vertical>
        <NavItem className={styles.navlogo}>
          {itemNav.map((item) => {
            return (
              <NavLink tag={Link} to={item.link}>
                <img src={item.image} alt={item.title} />
              </NavLink>
            );
          })}
        </NavItem>
        <GameRules />
      </Nav>
    </div>
  );
}
export default NavBar;

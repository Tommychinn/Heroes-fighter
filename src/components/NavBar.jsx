import React, { useState } from 'react';
import "./NavBar.css"
import {  Nav,  NavItem,  NavLink,} from 'reactstrap';
import GameRules from './GameRules';

const NavBar= (props) => {
  return (
    <div className="navigation">      
      <Nav vertical>
         <NavItem className="navlogo">           
          <NavLink href="#">
            <img src="https://zupimages.net/up/20/16/ko7g.png" alt="home logo"></img>
            </NavLink>
        </NavItem>
        <NavItem className="navlink">
          <NavLink href="#">
          <img src="https://img.icons8.com/color/48/000000/hulk.png" alt="hulk logo player section"></img>
          </NavLink>
        </NavItem>       
        <GameRules />
      </Nav>    
    </div>
  );
}
export default NavBar;



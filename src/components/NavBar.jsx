import React, { useState } from 'react';
import "./NavBar.css"
import {  Nav,  NavItem,  NavLink,} from 'reactstrap';
import GameRules from './GameRules';

const NavBar= (props) => {
  return (
    <div className="navigation">      
      <Nav vertical>
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Player</NavLink>
        </NavItem>       
        <GameRules />
      </Nav>    
    </div>
  );
}
export default NavBar;



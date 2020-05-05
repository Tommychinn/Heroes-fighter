import React from "react";
import styles from "./NavBar.module.css";
import { Nav, NavItem, NavLink } from "reactstrap";
import GameRules from "./GameRules";

import logo from "./img/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
    const itemNav = [
        { image: `${logo}`, title: "home", link: "/" },
        { image: `${logo}`, title: "characters", link: "/characters" },
    ];
    return (
        <div className={styles.navigation}>
            <Nav vertical>
                <NavItem className={styles.navlogo}>
                    {itemNav.map((item) => {
                        return (
                            <NavLink tag={Link} to={item.link}>
                                <img src={item.image} alt={item.title}></img>
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

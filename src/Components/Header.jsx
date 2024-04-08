import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo  from "../Assets/img/logo.png";

const Header = () => {
    return (
        <header className="Header">
                <img src={Logo} alt="logo"/>
                <div className="Navigation">
                    <li className="nav-btn">
                        <NavLink to="/home" className={nav => `nav-text ${nav.isActive ? 'isactive' : ''}`}>
                            Accueil
                        </NavLink>
                    </li>
                    <li className="nav-btn">
                        <NavLink to="/about" className={nav => `nav-text ${nav.isActive ? 'isactive' : ''}`}>
                            A propos
                        </NavLink>
                    </li>
                </div>
        </header>
    );
};

export default Header;
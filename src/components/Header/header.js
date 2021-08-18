import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import SideNavigation from './SideNav/sideNav';

const Header = (props) => {

    const logo = () =>
    (
            <Link to="/" className="logo">
                <img alt="logo" src="http://192.168.96.1:8080/nba_logo.png"></img>
            </Link>
    )
    

    const navbars = () => 
    (
            <div>
                <FontAwesome name="bars" 
                    
                    className="bars"
                />
            </div>
    )   

    return (
        <header className="header">
            <SideNavigation {...props}></SideNavigation>
            <div className="headerOpt">
                {navbars()}
                {logo()}
            </div>            
        </header>
    )
}

export default Header;
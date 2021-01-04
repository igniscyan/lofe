import React from 'react';
import './MobileNav.css';
import Logo from './logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const MobileNav = (props) => {
    const expand = (e) => {
        var x = document.getElementById('mobileNav');
        if(x.className === "mobile-nav-container")
        {
            x.className += " responsive";
        }
        else {
            x.className = "mobile-nav-container";
        }
    }

    return (
        <div className="mobile-nav-container" id="mobileNav">
            <a className="logo">
                <img src={Logo} alt="locals only sound logo" />
            </a>
            <a className="Store hideMe">Store</a>
            <a className="TourDates hideMe">Tour Dates</a>
            <a className="hamburger" onClick={expand}><FontAwesomeIcon icon={faBars} /> </a>
        </div>
    )
}

'use client'

import React, { useState } from 'react';
import './navigationBar.css';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
Cross1Icon
const NavigationMenuDemo = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="nav">
      <a href="#" className="nav__logo"></a>
      <div className="nav__menucontainer">
        <div className="nav__listcontainer" tabIndex="0">
          <ul className="nav__menu" id="navmenu">
            <li className="nav__item">
              <a href="#" className="nav__link">About</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">Projects</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">Contact</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">Blog</a>
            </li>
          </ul>
          <a id="hamburger" href="#navmenu" title="menu" className="nav__hamburger">
            <HamburgerMenuIcon height={'22px'} width={'22px'} />
          </a>
        </div>
        <a href="#!" title="close menu" className="nav__hamburgerclose"><Cross1Icon /></a>
      </div>
    </nav>

  );
}

export default NavigationMenuDemo;
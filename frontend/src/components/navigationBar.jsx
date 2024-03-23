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
    <nav class="nav">
      <a href="#" class="nav__logo"></a>


      <div class="nav__menucontainer">
        <div class="nav__listcontainer" tabindex="0">
          <ul class="nav__menu" id="navmenu">
            <li class="nav__item">
              <a href="#" class="nav__link">About</a>
            </li>
            <li class="nav__item">
              <a href="#" class="nav__link">Projects</a>
            </li>
            <li class="nav__item">
              <a href="#" class="nav__link">Contact</a>
            </li>
            <li class="nav__item">
              <a href="#" class="nav__link">Blog</a>
            </li>
          </ul>
          <a id="hamburger" href="#navmenu" title="menu" class="nav__hamburger">
            <HamburgerMenuIcon height={'22px'} width={'22px'} />
          </a>
        </div>
        <a href="#!" title="close menu" class="nav__hamburgerclose"><Cross1Icon /></a>
      </div>

    </nav>

  );
}

export default NavigationMenuDemo;
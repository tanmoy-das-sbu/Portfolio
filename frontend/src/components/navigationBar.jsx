'use client'

import React, { useEffect, useState } from 'react';
import './navigationBar.css';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const NavigationMenuDemo = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="nav__menucontainer">
        <div className="nav__listcontainer" tabIndex="0">
          <ul className="nav__menu" id="navmenu">
            <li className="nav__item">
              <Link className="nav__link" href={`/schedule`}>Home</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" href={`/aboutUs`}>About</Link>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">Gallery</a>
            </li>
            <li className="nav__item">
              <Link className="nav__link" href={`/socials`}>Socials</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" href={`/contact`}>Contact</Link>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">Blog</a>
            </li>
          </ul>
          <a id="hamburger" href="#navmenu" title="menu" className="nav__hamburger">
            <HamburgerMenuIcon height={'22px'} width={'22px'} style={{ marginTop: 'auto', marginBottom: 'auto' }} />
          </a>
        </div>
        <a href="#!" title="close menu" className="nav__hamburgerclose"><Cross1Icon height={'22px'} width={'22px'} style={{ marginTop: 'auto', marginBottom: 'auto' }} /></a>
      </div>

    </nav>

  );
}

export default NavigationMenuDemo;
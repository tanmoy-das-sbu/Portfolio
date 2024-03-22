'use client'

import React, { useState } from 'react';
import './navigationBar.css';

const NavigationMenuDemo = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className='navigation'>
            <div className='mobileMenuToggle' onClick={toggleMobileMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <ul className={`menu ${isMobileMenuOpen ? 'show' : ''}`}>
                <li><p>Home</p></li>
                <li><span className="separator">|</span></li>
                <li><p>Events</p></li>
                <li><span className="separator">|</span></li>
                <li><p>About</p></li>
                <li><span className="separator">|</span></li>
                <li><p>Contact</p></li>
            </ul>
        </div>
    );
}

export default NavigationMenuDemo;
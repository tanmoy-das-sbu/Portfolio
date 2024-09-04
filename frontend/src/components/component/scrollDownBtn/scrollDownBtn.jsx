"use client";
import React from 'react';
import './scrollDownBtn.css';

const ScrollDownBtn = () => {
  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button className="scrollDownBtn" onClick={scrollToFooter}>
      &#8595;
    </button>
  );
};

export default ScrollDownBtn;
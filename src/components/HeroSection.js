import React from "react";
import './HeroSection.css';
import {Link} from 'react-router-dom';

function HeroSection() {
    return (
      <>
        <div className='hero-container'>
            <img src='Concert-wallpaper.webp' alt='wallpaper'/>
            <div className='hero-section'>
                <div className='hero-title'>
                    <img src='Megadeth-logo.webp' alt='MEGADETH' className='hero-logo'/>
                </div>
                <div className='hero-text'>
                    <Link to='/tur'>
                        <button className='tickets-button'>IA BILETE</button>
                    </Link>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default HeroSection;
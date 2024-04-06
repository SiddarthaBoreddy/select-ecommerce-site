import React from 'react';
import "./Footer.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer bg-orange'>
      <div className = "container py-4 text-center">
        <div className='flex align-center justify-center text-white fw-3 fs-14'>
          <Link to = "/" className='text-uppercase' style={{color: 'white' }}>Privacy Notice</Link>
          <div className='vert-line'></div>
          <Link to = "/" className='text-uppercase'style={{color: 'white' }}>Conditions of Use</Link>
          <div className='vert-line'></div>
          <Link to = "/" className='text-uppercase'style={{color: 'white' }}>About Select.</Link>
        </div>
        <span className='text-white copyright-text text-manrope fs-14 fw-3' style={{color: 'white' }}>&copy; 2024 Select. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
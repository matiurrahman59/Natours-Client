import React from 'react';
import { Link } from 'react-router-dom';

// component
import footerLogo from '../../assets/images/logo-green.png';

// style
import './Footer.scss';

const Footer = () => {
  return (
    <div class='footer'>
      <div class='footer__logo'>
        <img src={footerLogo} alt='Natours logo' />
      </div>
      <ul class='footer__nav'>
        <li>
          <Link to='/'>About us</Link>
        </li>
        <li>
          <Link to='/'>Download apps</Link>
        </li>
        <li>
          <Link to='/'>Become a guide</Link>
        </li>
        <li>
          <Link to='/'>Careers</Link>
        </li>
        <li>
          <Link to='/'>Contact</Link>
        </li>
      </ul>
      <p class='footer__copyright'>&copy; by Natours. All rights reserved.</p>
    </div>
  );
};

export default Footer;

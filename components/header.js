
import React from 'react';
import './Header.css'; // Import CSS file for styling
import { SecondaryButton } from './secondaryButton';
import { Messages } from './messages';
import LogoImage from '../images/logo.jpeg';

export const Header = ({scrollToHomeRef, openContactModal}) => {

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LogoImage} className="logo" alt="Logo" />
      </div>
      <div className='header-buttons'>
      <nav>
        <ul className="navbar">
          <li  onClick={scrollToHomeRef}>
            {Messages.HOME}
            </li> 
        </ul>
      </nav>
      <SecondaryButton buttonText={Messages.CONNECT_WITH_SPECIALIST} onClick={openContactModal}/>
      </div>
    </div>
  );
}

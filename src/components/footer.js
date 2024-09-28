
import React from 'react';
import './Footer.css'; // Import CSS file for styling
import { Messages } from './messages';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="org-name">
        <h3>{Messages.FOOTER_TEXT}</h3>
      </div>
    </div>
  );
}

import React from 'react';
import './secondaryButton.css';

export const SecondaryButton = ({buttonText, onClick, className}) => {

    return (

            <button className={className ? `secondary-button ${className}` : "secondary-button"} onClick={onClick}>
                <span className='secondary-button-text'>{buttonText}</span>
            </button>
    )
}
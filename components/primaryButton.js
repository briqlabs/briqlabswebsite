import React from 'react';
import './primaryButton.css';
import './ContactModal.css'

export const PrimaryButton = ({buttonText, onPress, customStyle={}}) => {

    return (
            <button className={`primary-button ${customStyle}`} onClick={onPress}>
                <span className='primary-button-text'>{buttonText}</span>
            </button>
    )
}
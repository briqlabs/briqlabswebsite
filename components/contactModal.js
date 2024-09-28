import React, { useState } from 'react';
import './ContactModal.css'; // Import CSS file for styling
import { PrimaryButton } from './primaryButton';
import { Messages } from './messages';
import emailjs from 'emailjs-com';

const ContactModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const clearFormValues = () => {
    setName('');
    setEmail('');
    setMessage('');
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    try{

    emailjs.send(serviceId, templateId, {
      name: name,
      email: email,
      message: message,
    }, userId)
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
        setSuccess(true);
        clearFormValues(); // Clear form
        setTimeout(() => {
          closeModal();
        }, 3000);
        // 
      }, (err) => {
        console.error('Failed to send email. Error:', err);
        setError('Failed to send email. Please try again.');
      });
    }catch(err){
      setError('Failed to send email. Please try again.');
    }
  };

  const closeModal = () => {
    clearFormValues();
    setSuccess(false);
    setError(false);
    onClose(); // Close the modal after submission
  }

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>{Messages.CONTACT_US}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{`${Messages.NAME}:`}</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">{`${Messages.EMAIL}:`}</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">{`${Messages.MESSAGE}:`}</label>
            <textarea id="message" value={message} onChange={handleMessageChange} required />
          </div>
          <PrimaryButton buttonText={Messages.SEND} customStyle='send-contact-button' onPress={handleSubmit}/>
        </form>
        {success && <p>{Messages.EMAIL_SUCCESS}</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default ContactModal;

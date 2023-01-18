import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if ( inputType === 'firstName') {
      setFirstName(inputValue);
    } else if (inputType === 'lastName') {
      setLastName(inputValue);
    } else if (inputType === 'email'){
      setEmail (inputValue)
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    // Clear the inputs
  
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');

  };

  return (
    <section className='contact-page-container'>
            <h2>
        Contact Me
      </h2>
      <div className='contact-form-container'>

      <form className="form">
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
         <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
         <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          id='text-input'
          placeholder="Your message"
        />
        <div className="error-text">
          {errorMessage && (
          <p className='error-message'>{errorMessage}</p>
          )}
        </div>

        <button type="button" className="submit-button" onClick={handleFormSubmit}>
          Submit
        </button>
      
      </form>
     
      </div>
      </section>
  );
}

export default Form;



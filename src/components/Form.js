import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY
    )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className="container mt-5 contact-form ">
    <form ref={form} onSubmit={sendEmail} className='form-group'>

    <div className="mb-3">
      <label className="form-label">Name</label>
      <input className="form-control" type="text" name="user_name" required/>
      </div>

      <div className="mb-3">
      <label className="form-label">Email</label>
      <input className="form-control" type="email" name="user_email" required/>
      </div>

      <div className="mb-3">
      <label className="form-label">Message</label>
      <textarea className="form-control" name="message" required/>
      </div>

      <input className="btn submit-button" type="submit"/>
     
    </form>
    </div>
  );
};

export default Form;
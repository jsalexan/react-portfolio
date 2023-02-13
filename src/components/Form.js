import React from "react";

export default function Form() {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitted!");

    const { name, email, message } = e.target.elements;
    let formInfo = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(formInfo);
  };
  return (
    <div className="container mt-5 contact-form ">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn  submit-button" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
}

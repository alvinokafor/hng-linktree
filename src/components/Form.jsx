import React from "react";
import "./Form.css";

export default function Form() {

  return (
    <form>
      <section className="name-section">
        <div className="input-field name-field">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            id="first_name"
            required
          />
        </div>

        <div className="input-field name-field">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            id="last_name"
            required
          />
        </div>
      </section>

      <div className="input-field email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            required
          />
        </div>

        <div className="input-field textarea">
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Send me a message and I'll reply you as soon as possible..."
            id="message"
          />
        </div>

        <div className="checkbox"> 
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">You agree to providing your data to Alvin who may contact you.</label>
        </div>

        <button id='btn__submit'>Send Message</button>
    </form>
  );
}

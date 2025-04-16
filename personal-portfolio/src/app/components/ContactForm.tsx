"use client";

import React, { useState } from "react";
import "./contactForm.css";

export default function ContactForm() {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
    validate: "",
  };

  const [text, setText] = useState(initialState);

  const handleTextChange = (e: Event | any) => {
    // The target depends on where the function is called from
    // Object destructuring from the complete variable (calling only name and value)
    const { name, value } = e.target;
    // Hold the original value (...text) then change the value of a specific variable that we want to change. `[name]: value`
    setText({ ...text, [name]: value, validate: "" });
  };

  const handleSubmitForm = async (e: Event | any) => {
    e.preventDefault();
    // Simple form validation
    if (
      text.name === "" ||
      text.email === "" ||
      text.subject === "" ||
      text.message === ""
    ) {
      setText({ ...text, validate: "incomplete" });
      return;
    }

    // POST request sent to contact API
    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(text),
      });

      setText({ ...text, validate: "loading" });

      const result = await response.json();
      if (result) {
        setText({ ...text, validate: "success" });
        console.log("Success:", result);
      }
    } catch (error) {
      setText({ ...text, validate: "error" });
      console.error("Error:", error);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmitForm}>
      <div className="row">
        <div className="col-md-6 form-group">
          {/* Two-way handling of input in a form */}
          <input
            type="text"
            name="name"
            className="form-control"
            value={text.name}
            placeholder="Your Name"
            onChange={handleTextChange}
          />
        </div>
        <div className="col-md-6 form-group mt-3 mt-md-0">
          {/* Two-way handling of input in a form */}
          <input
            type="email"
            name="email"
            className="form-control"
            value={text.email}
            placeholder="Your Email"
            onChange={handleTextChange}
          />
        </div>
      </div>
      <div className="form-group mt-3">
        {/* Two-way handling of input in a form */}
        <input
          type="text"
          name="subject"
          className="form-control"
          value={text.subject}
          placeholder="Subject"
          onChange={handleTextChange}
        />
      </div>
      <div className="form-group mt-3">
        {/* Two-way handling of input in a form */}
        <textarea
          name="message"
          className="form-control"
          value={text.message}
          rows={5}
          placeholder="Message"
          onChange={handleTextChange}
        ></textarea>
      </div>

      <div className="my-3">
        {text.validate === "loading" && (
          <div className="loading">Sending Message</div>
        )}
        {text.validate === "incomplete" && (
          <div className="error-message">Please fill in all above details</div>
        )}
        {text.validate === "success" && (
          <div className="sent-message">
            Your message was sent. We will contact you ASAP. Thank you!
          </div>
        )}
        {text.validate === "error" && (
          <div className="error-message">Server Error</div>
        )}
      </div>

      <div className="text-center">
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
}

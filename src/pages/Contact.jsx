import React from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <section id="contact">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <Form />
      </section>
      <Footer />
    </>
  );
}

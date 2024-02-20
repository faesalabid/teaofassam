import { useState } from "react";
import "../styles/contact.css";
import PagesHeader from "../components/PagesHeader.jsx";
import Footer from "../components/Footer.jsx";
import BottomBar from "../components/BottomBar.jsx";

function Contact() {
  const [animationKey, setAnimationKey] = useState(0);
  const [custName, setcustName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [custNameValid, setcustNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [mobileValid, setMobileValid] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  function triggerAnimation() {
    setAnimationKey((prevKey) => prevKey + 1);
  }

  function validateForm() {
    console.log("Validating form...");
    let isValid = true;

    if (!custName.trim()) {
      setcustNameValid(false);
      isValid = false;
    } else {
      setcustNameValid(true);
    }

    if (!email.trim() || !email.includes("@")) {
      setEmailValid(false);
      isValid = false;
    } else {
      setEmailValid(true);
    }

    if (!mobile.trim() || !/^\d+$/.test(mobile)) {
      setMobileValid(false);
      isValid = false;
    } else {
      setMobileValid(true);
    }

    if (!isValid) {
      triggerAnimation();
    }

    return isValid;
  }

  function order(submit) {
    submit.preventDefault();
    if (validateForm()) {
      console.log(custName, email, mobile);
      setFormSubmitted(true);
    } else {
      setFormSubmitted(false);
    }
  }

  return (
    <div className="contact-container">
      <PagesHeader />

      <form onSubmit={order} className="contact-form">
        <h1 className="contact-head">Contact Us</h1>
        <input
          id="custname"
          key={`custName-${animationKey}`}
          type="text"
          name="custname"
          className={custNameValid ? "" : "contact-error-input"}
          value={custName}
          onChange={(e) => setcustName(e.target.value)}
          autoComplete="name"
          placeholder="Your Name"
        />

        <input
          id="email"
          key={`email-${animationKey}`}
          type="email"
          name="email"
          className={emailValid ? "" : "contact-error-input"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          placeholder="Email"
        />

        <input
          id="mobile"
          key={`mobile-${animationKey}`}
          type="tel"
          name="mobile"
          className={mobileValid ? "" : "contact-error-input"}
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          autoComplete="tel"
          placeholder="Contact Number"
        />
        <textarea placeholder="Message" className="contact-text"></textarea>
        <input type="submit" value="Send" />
        {formSubmitted && (
          <span className={`thanks ${formSubmitted ? "visible" : ""}`}>
            Your request has been received. We will review it and get back to
            you soon.
          </span>
        )}
      </form>
      <Footer />
      <BottomBar />
    </div>
  );
}

export default Contact;

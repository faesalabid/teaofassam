import { useState } from "react";
import "../styles/account.css";
import PagesHeader from "../components/PagesHeader.jsx";
import Footer from "../components/Footer.jsx";
import BottomBar from "../components/BottomBar.jsx";

function Account() {
  const [animationKey, setAnimationKey] = useState(0);
  const [custName, setcustName] = useState("");
  const [custPassword, setCustPassword] = useState("");
  const [email, setEmail] = useState("");
  const [custNameValid, setcustNameValid] = useState(true);
  const [custPasswordValid, setcustPasswordValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
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

    if (!custPassword.trim()) {
      setcustPasswordValid(false);
      isValid = false;
    } else {
      setcustPasswordValid(true);
    }

    if (!email.trim() || !email.includes("@")) {
      setEmailValid(false);
      isValid = false;
    } else {
      setEmailValid(true);
    }

    if (!isValid) {
      triggerAnimation();
    }

    return isValid;
  }

  function order(submit) {
    submit.preventDefault();
    if (validateForm()) {
      console.log(custName, email);
      setFormSubmitted(true);
    } else {
      setFormSubmitted(false);
    }
  }

  return (
    <div className="account-container">
      <PagesHeader />

      <form onSubmit={order} className="contact-form">
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
          id="custpassword"
          key={`custPassword-${animationKey}`}
          type="password"
          name="custpassword"
          className={custPasswordValid ? "" : "contact-error-input"}
          onChange={(e) => setCustPassword(e.target.value)}
          placeholder="Password"
        />

        <input type="submit" value="Sign In" />
        {formSubmitted && (
          <span className={`thanks ${formSubmitted ? "visible" : ""}`}>
            Welcome back, {custName}
          </span>
        )}
      </form>
      <Footer />
      <BottomBar />
    </div>
  );
}

export default Account;

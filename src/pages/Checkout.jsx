import { useState } from "react";
import "../styles/checkout.css";
import usStates from "../data/States.jsx";
import visa from "../assets/visa.png";
import mastercard from "../assets/master.png";
import amex from "../assets/amex.png";
import pasteIcon from "../assets/paste.svg";
import disc from "../assets/disc.png";
import Footer from "../components/Footer.jsx";
import PagesHeader from "../components/PagesHeader.jsx";
import BottomBar from "../components/BottomBar.jsx";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const navigate = useNavigate();

  const [custName, setcustName] = useState("");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [country] = useState("United States of America");
  const [selectedState, setSelectedState] = useState("");
  const [mobile, setMobile] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const cvc = "9999";

  const [custNameValid, setcustNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [streetAddressValid, setStreetAddressValid] = useState(true);
  const [cityValid, setCityValid] = useState(true);
  const [zipValid, setZipValid] = useState(true);
  const [selectedStateValid, setSelectedStateValid] = useState(true);
  const [mobileValid, setMobileValid] = useState(true);
  const [cardHolderNameValid, setCardHolderNameValid] = useState(true);

  const paste = () => {
    setcustName("Faisal Abid");
    setEmail("faesalabid@gmail.com");
    setStreetAddress("Jersey Street");
    setCity("Jersey City");
    setZip("07306");
    setSelectedState("New Jersey");
    setMobile("1234567890");
    setCardHolderName("Faisal Abid");
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = item.price ? parseFloat(item.price.substring(1)) : 0;
    return total + item.quantity * itemPrice;
  }, 0);

  const finalPrice = totalPrice + 10;

  const expiry = "05/33";

  function validateForm() {
    let isValid = true;

    if (!custName.trim() || !/^[A-Za-z\s]+$/.test(custName)) {
      setcustNameValid(false);
      isValid = false;
      toast.error("Invalid Name ", {
        position: "bottom-center",
      });
    } else {
      setcustNameValid(true);
    }

    if (!email.trim() || !email.includes("@")) {
      setEmailValid(false);
      isValid = false;
      toast.error("Invalid Email", {
        position: "bottom-center",
      });
    } else {
      setEmailValid(true);
    }

    if (!streetAddress.trim()) {
      setStreetAddressValid(false);
      isValid = false;
      toast.error("Invalid Address", {
        position: "bottom-center",
      });
    } else {
      setStreetAddressValid(true);
    }

    if (!city.trim()) {
      setCityValid(false);
      isValid = false;
      toast.error("Invalid City", {
        position: "bottom-center",
      });
    } else {
      setCityValid(true);
    }

    if (!zip.trim() || !/^\d{5}(-\d{4})?$/.test(zip)) {
      setZipValid(false);
      isValid = false;
      toast.error("Invalid ZipCode", {
        position: "bottom-center",
      });
    } else {
      setZipValid(true);
    }

    if (!selectedState) {
      setSelectedStateValid(false);
      isValid = false;
      toast.error("Invalid State", {
        position: "bottom-center",
      });
    } else {
      setSelectedStateValid(true);
    }

    if (!mobile.trim() || !/^\d+$/.test(mobile)) {
      setMobileValid(false);
      isValid = false;
      toast.error("Invalid Mobile Number", {
        position: "bottom-center",
      });
    } else {
      setMobileValid(true);
    }

    if (!cardHolderName.trim() || !/^[A-Za-z\s]+$/.test(cardHolderName)) {
      setCardHolderNameValid(false);
      isValid = false;
      toast.error("Invalid Cardholder Name", {
        position: "bottom-center",
      });
    } else {
      setCardHolderNameValid(true);
    }

    return isValid;
  }

  function order(submit) {
    submit.preventDefault();
    if (validateForm()) {
      navigate("/thankyou");
    }
  }

  const handleCardHolderNameChange = (e) => {
    setCardHolderName(e.target.value);
  };

  const handleCvcChange = (e) => {
    setCvc(e.target.value);
  };

  return (
    <>
      <div className="checkout-page">
        <PagesHeader />

        <div className="checkout-main-container">
          <form onSubmit={order} className="checkout-form">
            <div className="checkout-left">
              <div className="demo-details" onClick={paste}>
                <img src={pasteIcon} className="paste-image" />
                <p>Paste Demo Details</p>
              </div>
              <label>Name</label>
              <input
                type="text"
                name="custname"
                className={custNameValid ? "" : "error-input"}
                value={custName}
                onChange={(e) => setcustName(e.target.value)}
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                className={emailValid ? "" : "error-input"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Street Address</label>
              <input
                type="text"
                name="streetAddress"
                className={streetAddressValid ? "" : "error-input"}
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
              />
              <div className="city-zip">
                <input
                  placeholder="City"
                  type="text"
                  name="city"
                  className={cityValid ? "" : "error-input"}
                  id="mr"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />

                <input
                  placeholder="Zip Code"
                  type="text"
                  name="zip"
                  id="ml"
                  className={zipValid ? "" : "error-input"}
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>

              <div className="country-state">
                <input
                  type="text"
                  name="country"
                  id="mr2"
                  value={country}
                  readOnly
                />

                <input
                  placeholder="State"
                  id="ml2"
                  list="state-list"
                  name="state"
                  className={selectedStateValid ? "" : "error-input"}
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                />
                <datalist id="state-list">
                  {usStates.map((state, index) => (
                    <option key={index} value={state} />
                  ))}
                </datalist>
              </div>

              <label>Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                className={mobileValid ? "" : "error-input"}
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <div className="checkout-right">
              <div className="order-summary">
                <div className="order-summary-products">
                  {cartItems.map((item, index) => (
                    <div key={index} className="order-item">
                      <img
                        className="checkout-product-image"
                        src={item.image}
                        alt={item.name}
                      />
                      <span>
                        {item.name} x {item.quantity}
                      </span>
                      <span>
                        $
                        {(
                          parseFloat(item.price.substring(1)) * item.quantity
                        ).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="order-totals">
                  <div className="order-item">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="order-item">
                    <span>Shipping</span>
                    <span>$10.00</span>
                  </div>
                  <div className="order-item total">
                    <span>Total</span>
                    <span>${finalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="card-information">
                <div className="test-mode">Test Mode</div>
                <label htmlFor="card-number">Card Number</label>
                <input
                  type="text"
                  id="card-number"
                  value={"1234 5678 9012 3456"}
                  readOnly
                />
                <div className="card-icons">
                  <img src={visa} alt="Visa" />
                  <img src={mastercard} alt="MasterCard" />
                  <img src={amex} alt="American Express" />
                  <img src={disc} alt="Discover" />
                </div>

                <div className="expiry-cvc">
                  <input
                    type="text"
                    id="expiry"
                    placeholder="MM / YY"
                    value={expiry}
                    readOnly
                  />
                  <input
                    type="password"
                    id="cvc"
                    placeholder="CVV/CVC"
                    value={cvc}
                    readOnly
                  />
                </div>

                <label htmlFor="cardholder-name">Cardholder Name</label>
                <input
                  type="text"
                  id="cardholder-name"
                  placeholder="Full name on card"
                  value={cardHolderName}
                  onChange={handleCardHolderNameChange}
                  className={cardHolderNameValid ? "" : "error-input"}
                />
              </div>

              <input type="submit" value="Place Order" />
            </div>
          </form>
        </div>

        <Footer />
        <BottomBar />
      </div>
    </>
  );
}

export default Checkout;

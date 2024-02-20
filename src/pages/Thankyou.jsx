import { Link } from "react-router-dom";
import "../styles/thankyou.css";

function Thankyou() {
  return (
    <div className="thank-you-container">
      <h2>Thank You!</h2>
      <p>Your order has been placed successfully.</p>
      <Link to="/">
        <button className="go-to-home">Go to Home</button>
      </Link>
    </div>
  );
}

export default Thankyou;

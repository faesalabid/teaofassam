import "../styles/herosection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-background-image"></div>
      <h1 className="hero-heading">Assam's Finest Tea</h1>
      <p className="hero-subtitle">
        A Sip of Authenticity, Directly from the Tea Gardens to Your Cup
      </p>
      <Link to="/all-products">
        <button className="shop-now">Explore</button>
      </Link>
    </div>
  );
}

export default HeroSection;

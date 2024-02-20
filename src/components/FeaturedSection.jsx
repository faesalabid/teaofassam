import { Link } from "react-router-dom";
import "../styles/featuredsection.css";
import FeaturedProduct from "./FeaturedProduct.jsx";

function FeaturedSection({ addToCart, addToWish }) {
  return (
    <div className="featured-container">
      <div className="featured-heading">
        <p className="featured-text">Featured Products</p>
        <Link to="/all-products">
          <p className="f-show-more">View All </p>
        </Link>
      </div>
      <FeaturedProduct addToCart={addToCart} addToWish={addToWish} />
    </div>
  );
}

export default FeaturedSection;

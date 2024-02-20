import "../styles/giftsection.css";
import GiftProducts from "../data/GiftProducts.jsx";
import addToCartImg from "../assets/cart-product.svg";
import wishlistImg from "../assets/heart2.svg";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

function GiftSection({ giftAddToCart, addToWish }) {
  const giftSubtitles =
    "As the coffee shop market becomes more popular, the number of cafe websites is growing. The internet and social media play an important role in finding new customers.";

  const [items, setItems] = useState(GiftProducts);

  return (
    <div className="gift-main-container">
      <div className="gift-container">
        <div className="gift-bg-image"></div>
        <div className="gift-info">
          <h3 className="gift-boxes-text">Gift Boxes</h3>
          <h2 className="gift-heading">
            Gift your loved ones the Tea of Assam Gift Boxes
          </h2>
          <p className="gift-subtitles">{giftSubtitles}</p>
        </div>

        <div className="gift-products">
          {items.map((item) => (
            <div key={item.id} className="gift-product">
              <Link to={`/products/${item.slug}`} state={{ items: item }}>
                <img src={item.image} alt="gift-image" className="gift-image" />
              </Link>
              <div className="gift-details">
                <Link to={`/products/${item.slug}`} state={{ items: item }}>
                  <h2 className="gift-name">{item.name}</h2>
                </Link>
                <h3 className="gift-size">{item.size}</h3>
                <h3 className="gift-price">{item.price}</h3>

                <div className="gift-btns">
                  <button
                    className="gift-padd-to-wish"
                    onClick={() => {
                      addToWish(item);
                      toast.success("Added to Wishlist", { duration: 1000 });
                    }}
                  >
                    <img src={wishlistImg} alt="Add to Wishlist" />
                  </button>
                  <button
                    className="gift-padd-to-cart"
                    onClick={() => {
                      giftAddToCart(item);
                      toast.success("Added to Cart", { duration: 1000 });
                    }}
                  >
                    <img src={addToCartImg} alt="Add to Cart" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GiftSection;

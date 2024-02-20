import "../styles/wishlist.css";
import { useState, useEffect } from "react";
import "../styles/allproducts.css";
import Header from "../components/Header.jsx";
import BottomBar from "../components/BottomBar.jsx";
import Footer from "../components/Footer.jsx";
import CartPop from "../components/CartPop.jsx";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import addToCartImg from "../assets/cart-product.svg";
import deleteImg from "../assets/deletewish.svg";

function Wishlist() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((elem) => elem.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map((elem) =>
          elem.id === product.id
            ? { ...elem, quantity: elem.quantity + 1 }
            : elem,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const [wishItems, setWishItems] = useState(() => {
    const savedWishItems = localStorage.getItem("wishItems");
    return savedWishItems ? JSON.parse(savedWishItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishItems", JSON.stringify(wishItems));
  }, [wishItems]);

  const onDelete = (index) => {
    setCartItems((currentItems) =>
      currentItems.filter((_, idx) => idx !== index),
    );
  };

  const onDeleteWish = (index) => {
    setWishItems((currentWishItems) =>
      currentWishItems.filter((_, idx) => idx !== index),
    );
  };

  const onUpdateQuantity = (index, delta) => {
    setCartItems((currentItems) =>
      currentItems.map((item, idx) =>
        idx === index
          ? { ...item, quantity: Math.max(item.quantity + delta, 0) }
          : item,
      ),
    );
  };

  return (
    <>
      {cartVisible && (
        <CartPop
          cartItems={cartItems}
          wishItems={wishItems}
          setCartVisible={setCartVisible}
          onUpdateQuantity={onUpdateQuantity}
          onDelete={onDelete}
        />
      )}
      <Header
        cartCount={cartItems.length}
        wishCount={wishItems.length}
        setCartVisible={setCartVisible}
      />

      <div className="wish-products-container">
        {wishItems.length === 0 ? (
          <div className="empty-wishlist-message">Your wishlist is empty!</div>
        ) : (
          <div className="wish-products">
            {wishItems.map((item, index) => (
              <div key={item.id} className="wish-product">
                <Link to={`/products/${item.slug}`} state={{ items: item }}>
                  <img
                    className="wish-product-image"
                    src={item.image}
                    alt={item.name}
                  />
                </Link>
                <div className="wish-product-details">
                  <h3 className="wish-product-name">
                    <Link to={`/products/${item.slug}`} state={{ items: item }}>
                      {item.name}
                    </Link>
                  </h3>
                  <p className="wish-product-size">{item.size}</p>
                  <p className="wish-product-price">{item.price}</p>
                  <div className="wish-product-btns">
                    <button
                      className="wish-removed"
                      onClick={() => {
                        onDeleteWish(index);
                        toast.warning("Removed from Wishlist", {
                          duration: 1000,
                        });
                      }}
                    >
                      <img src={deleteImg} alt="Remove from Wishlist" />
                    </button>
                    <button
                      className="wish-padd-to-cart"
                      onClick={() => {
                        addToCart(item);
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
        )}
      </div>
      <Footer />
      <BottomBar />
    </>
  );
}

export default Wishlist;

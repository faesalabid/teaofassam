import "../styles/singleproduct.css";
import Footer from "../components/Footer.jsx";
import BottomBar from "../components/BottomBar.jsx";
import Header from "../components/Header.jsx";
import CartPop from "../components/CartPop.jsx";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SingleProduct() {
  const location = useLocation();
  const items = location.state.items;
  const [itemQuantity, setItemQuantity] = useState(1);
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
            ? { ...elem, quantity: elem.quantity + itemQuantity }
            : elem,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: itemQuantity }]);
    }
  };

  const [wishItems, setWishItems] = useState(() => {
    const savedWishItems = localStorage.getItem("wishItems");
    return savedWishItems ? JSON.parse(savedWishItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishItems", JSON.stringify(wishItems));
  }, [wishItems]);

  const addToWish = (product) => {
    const existingWishProduct = wishItems.find(
      (elem) => elem.id === product.id,
    );
    if (existingWishProduct) {
      setWishItems(
        wishItems.map((elem) =>
          elem.id === product.id
            ? { ...elem, wishQuantity: elem.wishQuantity + 1 }
            : elem,
        ),
      );
    } else {
      setWishItems([...wishItems, { ...product, wishQuantity: 1 }]);
    }
  };

  const onDelete = (index) => {
    setCartItems((currentItems) =>
      currentItems.filter((_, idx) => idx !== index),
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

  const minusItem = () => {
    if (itemQuantity > 1) setItemQuantity(itemQuantity - 1);
  };

  const plusItem = () => {
    setItemQuantity(itemQuantity + 1);
  };
  return (
    <>
      {cartVisible && (
        <CartPop
          cartItems={cartItems}
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

      <div className="single-product-container">
        <div className="sp-container">
          <div className="sp-img-container">
            <img src={items.image} className="sp-img" />
          </div>
          <div className="sp-details">
            <h3 className="sp-name">{items.name}</h3>
            <p className="sp-size">{items.size}</p>
            <p className="sp-price">{items.price}</p>
            <div className="sp-desc">{items.desc}</div>
            <div className="quantity-text">Quantity:</div>
            <div className="sp-counter">
              <button className="buttonminus" onClick={minusItem}>
                -
              </button>
              <p>{itemQuantity}</p>
              <button className="buttonplus" onClick={plusItem}>
                +
              </button>
            </div>
            <button
              className="sp-add-to-cart"
              onClick={() => {
                addToCart(items);
                toast.success("Added to Cart", { duration: 1000 });
              }}
            >
              Add to Cart
            </button>
            <button
              className="sp-add-to-cart"
              onClick={() => {
                addToWish(items);
                toast.success("Added to Wishlist", { duration: 1000 });
              }}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <BottomBar />
    </>
  );
}

export default SingleProduct;

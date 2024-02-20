import { useState, useEffect } from "react";
import FeaturedSection from "../components/FeaturedSection.jsx";
import GiftSection from "../components/GiftSection.jsx";
import Header from "../components/Header.jsx";
import HeroSection from "../components/HeroSection.jsx";
import bg from "../assets/bg2.mp4";
import CartPop from "../components/CartPop.jsx";
import BottomBar from "../components/BottomBar.jsx";
import "../styles/home.css";
import Footer from "../components/Footer.jsx";
import "../styles/home.css";

function Home() {
  const [cartVisible, setCartVisible] = useState(false);

  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

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

  const giftAddToCart = (product) => {
    const existingGiftProduct = cartItems.find(
      (elem) => elem.id === product.id,
    );
    if (existingGiftProduct) {
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

  return (
    <div className="main">
      {cartVisible && (
        <CartPop
          cartItems={cartItems}
          setCartVisible={setCartVisible}
          onUpdateQuantity={onUpdateQuantity}
          onDelete={onDelete}
        />
      )}
      <div className="main-container">
        <Header
          cartCount={cartItems.length}
          wishCount={wishItems.length}
          setCartVisible={setCartVisible}
        />
        <HeroSection />
      </div>

      <FeaturedSection addToCart={addToCart} addToWish={addToWish} />
      <GiftSection giftAddToCart={giftAddToCart} addToWish={addToWish} />

      <Footer />
      <BottomBar wishCount={wishItems.length} />
    </div>
  );
}

export default Home;

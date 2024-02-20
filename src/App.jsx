import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import Checkout from "./pages/Checkout.jsx";
import Contact from "./pages/Contact.jsx";
import Policies from "./pages/Policies.jsx";
import Account from "./pages/Account.jsx";
import Wholesale from "./pages/Wholesale.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Faq from "./pages/Faq.jsx";
import { Toaster } from "sonner";
import UnderConstruction from "./pages/UnderConstruction.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Thankyou from "./pages/Thankyou.jsx";
import "./styles/index.css";

function App() {
  let location = useLocation();

  return (
    <>
      <Toaster richColors theme="dark" />
      <ScrollToTop />
      <div key={location.pathname} className="fade-in">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/account" element={<Account />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/wholesale" element={<Wholesale />} />
          <Route path="/underconstruction" element={<UnderConstruction />} />
          <Route path="/faqs" element={<Faq />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import "../styles/featuredproduct.css";
import Products from "../data/Products.jsx";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import rightbutton from "../assets/right.png";
import addToCartImg from "../assets/cart-product.svg";
import wishlistImg from "../assets/heart2.svg";

function FeaturedProduct({ addToCart, addToWish }) {
  const [items, setItems] = useState(Products);
  const [currentPage, setCurrentPage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [productLeft, setProductLeft] = useState("product");

  const filteredProducts = items.filter((product) => product.featured === true);

  const itemsPerPage = windowWidth < 891 ? 2 : filteredProducts.length;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [itemsPerPage, filteredProducts.length]);

  const paginate = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    setProductLeft("product");
  };
  const paginateMinus = () => {
    setCurrentPage((prevPage) => {
      if (prevPage - 1 < 0) {
        return totalPages - 1;
      } else {
        return prevPage - 1;
      }
    });
    setProductLeft("product-left-swipe");
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  return (
    <div className="featured-products-890px">
      <div className="featured-products">
        {currentItems.map((item) => (
          <div key={item.id} className={productLeft}>
            <Link to={`/products/${item.slug}`} state={{ items: item }}>
              <img className="product-image" src={item.image} alt={item.name} />
            </Link>
            <div className="product-details">
              <h3 className="product-name">
                <Link to={`/products/${item.slug}`} state={{ items: item }}>
                  {item.name}
                </Link>
              </h3>
              <p className="product-size">{item.size}</p>
              <p className="product-price">{item.price}</p>
              <div>
                <button
                  className="padd-to-wish"
                  onClick={() => {
                    addToWish(item);
                    toast.success("Added to Wishlist", { duration: 1000 });
                  }}
                >
                  <img src={wishlistImg} alt="Add to Wishlist" />
                </button>
                <button
                  className="padd-to-cart"
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
      {windowWidth < 891 && totalPages > 1 && (
        <div className="pagination">
          <img
            className="prev-page"
            src={rightbutton}
            alt="Prev Page"
            onClick={paginateMinus}
          />
          <img
            className="nextPage"
            src={rightbutton}
            alt="Next Page"
            onClick={paginate}
          />
        </div>
      )}
    </div>
  );
}

export default FeaturedProduct;

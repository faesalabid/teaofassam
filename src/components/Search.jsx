import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import searchImg from "../assets/search.svg";
import closeSearch from "../assets/close2.svg";
import Products from "../data/Products.jsx";
import "../styles/search.css";

export default function Search() {
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchIcon, setSearchIcon] = useState(searchImg);
  const [pholder, setPlaceholder] = useState("Search products...");

  const [isOpen, setIsOpen] = useState(false);

  const filteredProducts =
    searchTerm.length >= 2
      ? Products.filter(
          (product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.brandName.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      : [];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 800) {
        setPlaceholder("Search");
      } else {
        setPlaceholder("Search products...");
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleInput = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => inputRef.current.focus(), 0);
    }
  };

  return (
    <div
      className={
        isOpen ? "head-search-container-open" : "head-search-container"
      }
    >
      <div className="search-modal-content">
        <input
          type="text"
          placeholder={pholder}
          className={isOpen ? "head-search-input-open" : "head-search-input"}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setSearchIcon(closeSearch);
          }}
          ref={inputRef}
        />

        <div className="search-results">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.slug}`}
              state={{ items: product }}
            >
              <div className="search-result-item">
                <img
                  className="search-p-img"
                  src={product.image}
                  alt={product.name}
                />
                <div className="search-p-name">{product.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <img
        onClick={() => {
          toggleInput();
          setSearchTerm("");
          setSearchIcon(isOpen ? searchImg : closeSearch);
        }}
        src={searchIcon}
        alt=""
        className="search-icon head-icons"
        aria-label="Toggle search input"
        role="button"
      />
    </div>
  );
}

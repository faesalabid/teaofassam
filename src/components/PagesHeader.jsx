import "../styles/pagesheader.css";
import headerLogo from "../assets/headerlogo.png";
import { Link } from "react-router-dom";
import Search from "../components/Search.jsx";

function PagesHeader({ cartCount, setCartVisible }) {
  return (
    <div className="pheader-container">
      <header className="pheader">
        <Link to="/">
          <img src={headerLogo} alt="" className="pheader-logo" />
        </Link>
        <Search />
      </header>
    </div>
  );
}

export default PagesHeader;

import "./Heder.css";
import { Link } from "react-router-dom";

const Header = ({ cartItems }) => {
  return (
    <div>
      <header className="header__container">
        <Link to="/cart" style={{ fontWeight: "bold", textDecoration: "none" }}>
          Cart{" "}
          <span style={{ verticalAlign: "super", fontWeight: "bold" }}>
            {cartItems.length}
          </span>
        </Link>
      </header>
    </div>
  );
};

export default Header;

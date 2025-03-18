import { Link } from "react-router-dom";
import "./Header.css";
import headerLogo from "../../assets/Logo.png";
import headerAvatar from "../../assets/avatar.jpg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__date-container">
        <Link to="/">
          <img src={headerLogo} alt="logo" className="header__logo" />
        </Link>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>

      <div className="header__user-container">
        <ToggleSwitch />
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add clothes
        </button>
        <p className="header__username">Name</p>
        <Link to="/profile">
          <img src={headerAvatar} alt="avatar" className="header__avatar" />
        </Link>
      </div>
    </header>
  );
}

export default Header;

import "./Header.css";
import headerLogo from "../../assets/Logo.png";
import headerAvatar from "../../assets/avatar.jpg";

function Header({ handleAddClick }) {
  return (
    <header className="header">
      <div className="header__date-container">
        <img src={headerLogo} alt="logo" className="header__logo" />
        <p className="header__date-and-location">date and location</p>
      </div>

      <div className="header__user-container">
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add clothes
        </button>
        <p className="header__username">Name</p>
        <img src={headerAvatar} alt="avatar" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;

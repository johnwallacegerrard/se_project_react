import { Link } from "react-router-dom";
import "./Header.css";
import headerLogo from "../../assets/Logo.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  handleSignUpClick,
  handleLogInClick,
  isLoggedIn,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const name = currentUser?.name;
  const avatarPlaceholder = name.slice(0, 1);

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

        {isLoggedIn ? (
          <>
            <button
              onClick={handleAddClick}
              type="button"
              className="header__add-clothes-btn"
            >
              + Add clothes
            </button>
            <p className="header__username">{currentUser?.name}</p>
            <Link className="header__link-wrapper" to="/profile">
              {currentUser.avatar ? (
                <img
                  src={currentUser?.avatar}
                  alt="avatar"
                  className="header__avatar"
                />
              ) : (
                <div className="header__avatar-placeholder">
                  <p className="header__avatar-placeholder-text">
                    {avatarPlaceholder}
                  </p>
                </div>
              )}
            </Link>
          </>
        ) : (
          <>
            <button
              onClick={handleSignUpClick}
              type="button"
              className="header__sign-up-btn"
            >
              Sign up
            </button>
            <button
              onClick={handleLogInClick}
              type="button"
              className="header__log-in-btn"
            >
              Log in
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;

import { useContext } from "react";

import "./Sidebar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Sidebar({ handleEditProfileClick }) {
  const { handleSignOut, currentUser } = useContext(CurrentUserContext);
  const name = currentUser.name;
  const avatarPlaceholder = name.slice(0, 1);
  return (
    <div className="sidebar">
      <div className="sidebar__user-container">
        {currentUser.avatar ? (
          <img
            src={currentUser?.avatar}
            alt="avatar"
            className="sidebar__avatar"
          />
        ) : (
          <div className="sidebar__avatar-placeholder">{avatarPlaceholder}</div>
        )}
        <p className="sidebar__name">{currentUser.name}</p>
      </div>
      <button
        type="button"
        className="sidebar__edit-profile-btn"
        onClick={handleEditProfileClick}
      >
        Change profile data
      </button>
      <button
        type="button"
        className="sidebar__log-out-btn"
        onClick={handleSignOut}
      >
        Log out
      </button>
    </div>
  );
}

export default Sidebar;

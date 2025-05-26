import "./Profile.css";

import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  handleAddClick,
  handleCardClick,
  handleCardLike,
  clothingItems,
  handleEditProfileClick,
  isLoggedIn,
}) {
  return (
    <div className="profile">
      <Sidebar handleEditProfileClick={handleEditProfileClick} />
      <ClothesSection
        handleCardLike={handleCardLike}
        isLoggedIn={isLoggedIn}
        clothingItems={clothingItems}
        handleAddClick={handleAddClick}
        handleCardClick={handleCardClick}
      />
    </div>
  );
}

export default Profile;

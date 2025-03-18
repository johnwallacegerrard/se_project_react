import "./Profile.css";

import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({ handleAddClick, handleCardClick, clothingItems }) {
  return (
    <div className="profile">
      <Sidebar />
      <ClothesSection
        clothingItems={clothingItems}
        handleAddClick={handleAddClick}
        handleCardClick={handleCardClick}
      />
    </div>
  );
}

export default Profile;

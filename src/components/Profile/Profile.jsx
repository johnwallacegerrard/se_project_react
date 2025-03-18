import "./Profile.css";

import Sidebar from "../Sidebar/Sidebar";
import ClothingSection from "../ClothingSection/ClothingSection";

function Profile({ handleAddClick, handleCardClick, clothingItems }) {
  return (
    <div className="profile">
      <Sidebar />
      <ClothingSection
        clothingItems={clothingItems}
        handleAddClick={handleAddClick}
        handleCardClick={handleCardClick}
      />
    </div>
  );
}

export default Profile;

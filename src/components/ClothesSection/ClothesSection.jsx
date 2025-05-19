import { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ClothesSection({ handleAddClick, handleCardClick, clothingItems }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className="clothing">
      <div className="clothing__container">
        <p className="clothing__title">Your Item</p>
        <button
          className="clothing__add-btn"
          onClick={handleAddClick}
          type="button"
        >
          + Add New
        </button>
      </div>

      <ul className="clothing__list">
        {clothingItems
          .filter((item) => item.owner === currentUser._id)
          .map((item) => {
            return (
              <ItemCard
                handleCardClick={handleCardClick}
                key={item._id}
                item={item}
              />
            );
          })}
      </ul>
    </section>
  );
}

export default ClothesSection;

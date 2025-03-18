import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothingSection({ handleAddClick, handleCardClick, clothingItems }) {
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
        {clothingItems.map((item) => {
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

export default ClothingSection;

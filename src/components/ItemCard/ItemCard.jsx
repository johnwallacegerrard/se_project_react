import "./ItemCard.css";

function ItemCard(props, { handleCardClick }) {
  return (
    <li className="card">
      <button
        onClick={handleCardClick}
        type="button"
        className="card__btn-overlay"
      ></button>
      <h2 className="card__title">{props.item.name}</h2>
      <img
        className="card__image"
        src={props.item.link}
        alt={props.item.name}
      />
    </li>
  );
}

export default ItemCard;

import "./ItemCard.css";

function ItemCard({ item, handleCardClick }) {
  const onCardClick = () => {
    handleCardClick(item);
  };
  return (
    <li onClick={onCardClick} className="card">
      <h2 className="card__title">{item.name}</h2>
      <img className="card__image" src={item.link} alt={item.name} />
    </li>
  );
}

export default ItemCard;

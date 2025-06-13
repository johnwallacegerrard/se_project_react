import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ item, handleCardClick, handleCardLike, isLoggedIn }) {
  const { currentUser } = useContext(CurrentUserContext);

  const isLiked = item.likes.some((id) => id === currentUser?._id);

  const onCardClick = () => {
    handleCardClick(item);
  };

  const onCardLikeClick = (evt) => {
    evt.stopPropagation();
    handleCardLike({ ...item, isLiked });
  };

  return (
    <li onClick={onCardClick} className="card">
      <h2 className="card__title">
        {item.name}
        {isLoggedIn && (
          <button
            className={`card__like-btn ${
              isLiked ? "card__like-btn_active" : ""
            }`}
            type="button"
            onClick={onCardLikeClick}
          ></button>
        )}
      </h2>
      <img className="card__image" src={item.imageUrl} alt={item.name} />
    </li>
  );
}

export default ItemCard;

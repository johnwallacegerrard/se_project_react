import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ onDelete, activeModal, closeActiveModal, card }) {
  const { currentUser } = useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser?._id;

  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close-btn modal__close-btn_preview"
        ></button>
        <img src={card.imageUrl} alt="garment" className="modal__image" />
        <div className="modal__text">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
        {isOwn && (
          <button
            onClick={onDelete}
            type="button"
            className="modal__delete-btn"
          >
            Delete Item
          </button>
        )}
      </div>
    </div>
  );
}

export default ItemModal;

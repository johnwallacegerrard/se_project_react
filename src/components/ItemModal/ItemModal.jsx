import "./ItemModal.css";

function ItemModal({ activeModal, closeActiveModal, card }) {
  return (
    <div
      id="preview-modal"
      className={`modal ${activeModal === "preview" && "modal__opened"}`}
    >
      <div className="modal__content modal__content_type_image">
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close-btn"
        ></button>
        <img src={card.link} alt="garment" className="modal__image" />
        <div className="modal__text">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

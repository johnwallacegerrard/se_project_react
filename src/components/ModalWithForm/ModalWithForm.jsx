import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  closeActiveModal,
}) {
  return (
    <div
      id="add-clothes-modal"
      className={`modal ${
        activeModal === "addClothesModal" && "modal__opened"
      }`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close-btn"
        ></button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit-btn">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

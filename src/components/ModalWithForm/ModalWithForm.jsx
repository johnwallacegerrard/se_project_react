import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  closeActiveModal,
  isOpen,
  onSubmit,
  onLogInClick,
  onSignUpClick,
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close-btn"
        />
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__buttons">
            <button type="submit" className="modal__submit-btn">
              {buttonText}
            </button>
            {title === "Sign up" ? (
              <button
                onClick={onLogInClick}
                type="button"
                className="modal__submit-btn modal__submit-btn_secondary"
              >
                or Log In
              </button>
            ) : title === "Log in" ? (
              <button
                onClick={onSignUpClick}
                type="button"
                className="modal__submit-btn modal__submit-btn_secondary"
              >
                or Sign Up
              </button>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

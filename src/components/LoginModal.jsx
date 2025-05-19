import { useState, useEffect, useContext } from "react";
import ModalWithForm from "../components/ModalWithForm/ModalWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function LoginModal({ closeActiveModal, isOpen }) {
  const { handleLoginSubmit } = useContext(CurrentUserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(""), setPassword("");
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLoginSubmit({ email, password });
  };

  return (
    <ModalWithForm
      closeActiveModal={closeActiveModal}
      isOpen={isOpen}
      title="Log in"
      buttonText="Log in"
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          id="email"
          type="email"
          className="modal__input"
          placeholder="Email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          id="password"
          type="password"
          className="modal__input"
          placeholder="Password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
      </label>
    </ModalWithForm>
  );
}

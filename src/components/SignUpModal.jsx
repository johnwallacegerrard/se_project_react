import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import ModalWithForm from "./ModalWithForm/ModalWithForm";

export default function SignUpModal({ closeActiveModal, isOpen }) {
  const { handleSignUpSubmit } = useContext(CurrentUserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
    setAvatar("");
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUpSubmit({ email, password, name, avatar });
  };

  return (
    <ModalWithForm
      closeActiveModal={closeActiveModal}
      isOpen={isOpen}
      title="Sign up"
      buttonText="Next"
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email *
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
        Password *
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
      <label htmlFor="name" className="modal__label">
        Name
        <input
          id="Name"
          type="string"
          className="modal__input"
          placeholder="Name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </label>
      <label htmlFor="avatar" className="modal__label">
        Avatar URL
        <input
          id="avatar"
          type="URL"
          className="modal__input"
          placeholder="Avatar URL"
          onChange={(e) => {
            setAvatar(e.target.value);
          }}
          value={avatar}
        />
      </label>
    </ModalWithForm>
  );
}

import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import Api from "../utils/api";

export default function EditProfileModal({ closeActiveModal, isOpen }) {
  const { currentUser, handleEditProfileSubmit } =
    useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser?.name);
  const [avatar, setAvatar] = useState(currentUser?.avatar);

  useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setAvatar(currentUser.avatar);
    }
  }, [isOpen, currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProfileSubmit({ name, avatar });
  };

  return (
    <ModalWithForm
      closeActiveModal={closeActiveModal}
      isOpen={isOpen}
      title="Change profile data"
      buttonText="Save changes"
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name *
        <input
          id="name"
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
        Avatar*
        <input
          id="avatar"
          type="URL"
          className="modal__input"
          placeholder="Avatar"
          required
          onChange={(e) => {
            setAvatar(e.target.value);
          }}
          value={avatar}
        />
      </label>
    </ModalWithForm>
  );
}

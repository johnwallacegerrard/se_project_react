import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function AddItemModal({
  closeActiveModal,
  isOpen,
  onHandleAddClothingItemSubmit,
}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleAddClothingItemSubmit({ name, imageUrl: image, type });
    setName("");
    setImage("");
    setType("");
  };

  return (
    <ModalWithForm
      closeActiveModal={closeActiveModal}
      isOpen={isOpen}
      title="New Garment"
      buttonText="Add Garment"
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          id="name"
          type="text"
          className="modal__input"
          placeholder="Name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image
        <input
          id="imageUrl"
          type="url"
          required
          className="modal__input"
          placeholder="Image Url"
          onChange={(e) => {
            setImage(e.target.value);
          }}
          value={image}
        />
      </label>
      <fieldset className="modal__radio-btns">
        <legend className="modal__legend">Select the weather type:</legend>
        <div className="modal__radio-container">
          <input
            id="hot"
            value="hot"
            name="radio"
            type="radio"
            className="modal__radio-input"
            onChange={(e) => {
              setType(e.target.value);
            }}
            checked={type === "hot"}
          />
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            Hot
          </label>
        </div>
        <div className="modal__radio-container">
          <input
            id="warm"
            value="warm"
            name="radio"
            type="radio"
            className="modal__radio-input"
            onChange={(e) => {
              setType(e.target.value);
            }}
            checked={type === "warm"}
          />
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            Warm
          </label>
        </div>
        <div className="modal__radio-container">
          <input
            id="cold"
            value="cold"
            name="radio"
            type="radio"
            className="modal__radio-input"
            onChange={(e) => {
              setType(e.target.value);
            }}
            checked={type === "cold"}
          />
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
}

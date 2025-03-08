import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";

const addClothesBtn = document.querySelector("header__add-clothes-btn");
const modal = document.querySelectorAll(".modal");
const addClothesModal = document.querySelector("#add-clothes-modal");
const previewModal = document.querySelector("#preview-modal");

function App() {
  const [weatherData, setWeatherData] = useState({ type: "hot" });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    console.log("its working, bithes");
    setActiveModal("previewModal");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("addClothesModal");
  };

  const closeActiveModal = () => {
    console.log("its working, bitches!");
    setActiveModal("");
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
      </div>
      <ModalWithForm
        title="New Garment"
        buttonText="Add Garment"
        activeModal={activeModal}
        closeActiveModal={closeActiveModal}
      >
        <label htmlFor="name" className="modal__label">
          Name
          <input
            id="name"
            type="text"
            className="modal__input"
            placeholder="Name"
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image
          <input
            id="imageUrl"
            type="url"
            className="modal__input"
            placeholder="Image Url"
          />
        </label>
        <fieldset className="modal__radio-btns">
          <legend className="modal__legend">Select the weather type:</legend>
          <div className="modal__radio-container">
            <input
              value="hot"
              name="radio"
              type="radio"
              className="modal__radio-input"
            />
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              Hot
            </label>
          </div>
          <div className="modal__radio-container">
            <input
              value="warm"
              name="radio"
              type="radio"
              className="modal__radio-input"
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
              value="cold"
              name="radio"
              type="radio"
              className="modal__radio-input"
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
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        closeActiveModal={closeActiveModal}
      />
    </div>
  );
}

export default App;

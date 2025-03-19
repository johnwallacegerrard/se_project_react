import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import Api from "../../utils/api";

const addClothesBtn = document.querySelector("header__add-clothes-btn");
const modal = document.querySelectorAll(".modal");
const addClothesModal = document.querySelector("#add-clothes-modal");
const previewModal = document.querySelector("#preview-modal");

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
  });

  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const api = new Api({
    baseUrl: "http://localhost:3001",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const handleAddClothingItemSubmit = ({ name, imageUrl, type }) => {
    const newId = Math.max(...clothingItems.map((item) => item._id)) + 1;
    api
      .addClothingItem({ name: name, imageUrl: imageUrl, type: type })
      .then((data) => {
        setClothingItems([
          { name, imageUrl, weather: type, _id: newId },
          ...clothingItems,
        ]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleItemDelete = () => {
    api
      .deleteClothingItem(selectedCard._id)
      .then((res) => {
        setClothingItems(
          clothingItems.filter((item) => {
            return item._id !== selectedCard._id;
          })
        );
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("addClothesModal");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    if (currentTempUnit === "F") {
      setCurrentTempUnit("C");
    } else {
      setCurrentTempUnit("F");
    }
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    api
      .getClothingItems()
      .then((data) => {
        console.log(data);
        setClothingItems(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <CurrentTempUnitContext.Provider
          value={{ currentTempUnit, handleToggleSwitchChange }}
        >
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  handleAddClick={handleAddClick}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" />} replace />
          </Routes>
        </CurrentTempUnitContext.Provider>
      </div>
      <AddItemModal
        closeActiveModal={closeActiveModal}
        isOpen={activeModal === "addClothesModal"}
        onHandleAddClothingItemSubmit={handleAddClothingItemSubmit}
      />
      <ItemModal
        onDelete={handleItemDelete}
        activeModal={activeModal}
        card={selectedCard}
        closeActiveModal={closeActiveModal}
      />

      <Footer />
    </div>
  );
}

export default App;

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
import CurrentUserProvider from "../CurrentUserProvider";
import AddItemModal from "../AddItemModal/AddItemModal";
import LoginModal from "../LoginModal";
import SignUpModal from "../SignUpModal";
import EditProfileModal from "../EditProfileModal";
import Api from "../../utils/api";
import Auth from "../../utils/auth";

const api = new Api({
  baseUrl:
    process.env.NODE_ENV === "production"
      ? "https://api.w-t-w-r.strangled.net"
      : "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

const auth = new Auth({
  baseUrl: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

function App() {
  const [weatherData, setWeatherData] = useState({
    weather: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
  });

  const [currentTempUnit, setCurrentTempUnit] = useState("F");

  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAddClothingItemSubmit = ({ name, imageUrl, weather }) => {
    const newId = Math.max(...clothingItems.map((item) => item._id)) + 1;
    api
      .addClothingItem({ name, imageUrl, weather })
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
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

  const handleCardLike = (item) => {
    const token = localStorage.getItem("jwt");

    !item.isLiked
      ? api

          .addLike(item._id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((card) => (card._id === item._id ? updatedCard : card))
            );
          })
          .catch((err) => console.log(err))
      : api

          .removeLike(item._id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((card) => (card._id === item._id ? updatedCard : card))
            );
          })
          .catch((err) => console.log(err));
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("addClothesModal");
  };

  const handleLogInClick = () => {
    setActiveModal("logInModal");
  };

  const handleEditProfileClick = () => {
    setActiveModal("editProfileModal");
  };

  const handleSignUpClick = () => {
    setActiveModal("signUpModal");
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
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    api
      .getClothingItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <CurrentUserProvider
          closeActiveModal={closeActiveModal}
          setIsLoggedIn={setIsLoggedIn}
        >
          <CurrentTempUnitContext.Provider
            value={{ currentTempUnit, handleToggleSwitchChange }}
          >
            <Header
              handleAddClick={handleAddClick}
              handleLogInClick={handleLogInClick}
              handleSignUpClick={handleSignUpClick}
              weatherData={weatherData}
              isLoggedIn={isLoggedIn}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    isLoggedIn={isLoggedIn}
                    handleCardLike={handleCardLike}
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
                    handleCardLike={handleCardLike}
                    isLoggedIn={isLoggedIn}
                    handleAddClick={handleAddClick}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    handleEditProfileClick={handleEditProfileClick}
                  />
                }
              />
              <Route path="*" element={<Navigate to="/" />} replace />
            </Routes>
            <LoginModal
              handleSignUpClick={handleSignUpClick}
              closeActiveModal={closeActiveModal}
              isOpen={activeModal === "logInModal"}
            />
            <SignUpModal
              handleLogInClick={handleLogInClick}
              closeActiveModal={closeActiveModal}
              isOpen={activeModal === "signUpModal"}
            />
            <EditProfileModal
              closeActiveModal={closeActiveModal}
              isOpen={activeModal === "editProfileModal"}
            />
            <ItemModal
              handleCardLike={handleCardLike}
              onDelete={handleItemDelete}
              activeModal={activeModal}
              card={selectedCard}
              closeActiveModal={closeActiveModal}
            />
          </CurrentTempUnitContext.Provider>
        </CurrentUserProvider>
      </div>
      <AddItemModal
        closeActiveModal={closeActiveModal}
        isOpen={activeModal === "addClothesModal"}
        onHandleAddClothingItemSubmit={handleAddClothingItemSubmit}
      />

      <Footer />
    </div>
  );
}

export default App;

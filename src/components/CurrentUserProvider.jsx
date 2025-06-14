import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Auth from "../utils/auth";

function CurrentUserProvider({ children, closeActiveModal, setIsLoggedIn }) {
  const auth = new Auth({
    baseUrl:
      import.meta.env.MODE === "production"
        ? "https://api.w-t-w-r.strangled.net"
        : "http://localhost:3001",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const [currentUser, setCurrentUser] = useState({
    name: "",
    avatar: "",
  });

  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const jwt = auth.getToken();

    if (!jwt) {
      return;
    } else {
      auth
        .getCurrentUser(jwt)
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  const handleSignUpSubmit = ({ email, password, name, avatar }) => {
    auth
      .signUp({ email, password, name, avatar })
      .then((data) => {
        setIsLoggedIn(true);
        setCurrentUser({ name: data.name, avatar: data.avatar });
        closeActiveModal();
      })
      .catch((err) => {
        console.error;
      });
  };

  const handleLoginSubmit = ({ email, password }) => {
    auth
      .signIn({ email, password })
      .then((user) => {
        console.log(user);
        setIsLoggedIn(true);
        setCurrentUser(user);
        closeActiveModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleEditProfileSubmit = ({ name, avatar }) => {
    auth
      .updateCurrentUser({ name, avatar })
      .then((user) => {
        setCurrentUser(user);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleSignOut = () => {
    auth.clearToken();
    setIsLoggedIn(false);
    setCurrentUser({ name: "", avatar: "" });
    navigate("/");
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleLoginSubmit,
        handleSignUpSubmit,
        handleSignOut,
        handleEditProfileSubmit,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
}

export default CurrentUserProvider;

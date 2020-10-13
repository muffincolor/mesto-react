import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Elements from "./Elements";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import {CardContext} from "../contexts/CardContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmationPopup from "./ConfirmationPopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [selectedCardForDelete, setSelectedCardForDelete] = React.useState({});
  const [popupLoading, setPopupLoading] = React.useState(false);

  const [cards, setCards] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  function handleCardClick(data) {
    setIsImagePopupOpen(true);
    setSelectedCard(data);
  }

  function handleCardDelete(card) {
    setSelectedCardForDelete(card);
    setIsConfirmationPopupOpen(true);
  }

  function deleteCard(card) {
    api.deleteCard(card._id).then((response) => {
      const newCards = cards.filter(item => item !== card);
      setCards(newCards);
      closeAllPopups();
    }).catch(err => new Error(err));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    }).catch(err => new Error(err));
  }

  React.useEffect(() => {
    Promise.all([
      api.getProfileInfo(),
      api.getInitialCards()
    ])
      .then(values => {
        const [userData, initialCards] = values;
        setCards(initialCards);
        setCurrentUser(userData);
      })
      .catch((error) => new Error(`Ошибка: ${error}`));
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmationPopupOpen(false);
    setIsImagePopupOpen(false);
    setTimeout(() => {
      setSelectedCard({});
    }, 500);
    setPopupLoading(false);
  }

  function handleUpdateUser(user) {
    api.updateUserProfileInfo({name: user.name, about: user.about}).then((response) => {
      setCurrentUser(response);
      closeAllPopups();
    }).catch(err => new Error(err));
  }

  function handleUpdateAvatar(link) {
    api.updateUserPhoto(link).then((response) => {
      setCurrentUser(response);
      closeAllPopups();
    }).catch(err => new Error(err));
  }

  function handleAddPlaceSubmit(data) {
    api.addNewCard(data).then((response) => {
      setCards([response, ...cards]);
      closeAllPopups();
    }).catch(err => new Error(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CardContext.Provider value={cards}>
        <Header/>
        <Main onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              userData={currentUser}/>
        <Elements onCardClick={handleCardClick}
                  cards={cards}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}/>
        <Footer/>
        <ImagePopup isOpen={isImagePopupOpen}
                    card={selectedCard}
                    onClose={closeAllPopups}/>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}
                          isLoading={popupLoading} setLoadingStatus={setPopupLoading}/>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}
                         isLoading={popupLoading} setLoadingStatus={setPopupLoading}/>
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}
                       isLoading={popupLoading} setLoadingStatus={setPopupLoading}/>
        <ConfirmationPopup isOpen={isConfirmationPopupOpen} onClose={closeAllPopups}
                           cardForDelete={selectedCardForDelete} deleteFunction={deleteCard} isLoading={popupLoading}
                           setLoadingStatus={setPopupLoading}/>
      </CardContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;

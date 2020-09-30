import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Elements from "./Elements";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [cards, setCards] = React.useState({});
    const [userData, setUserData] = React.useState({});

    function handleCardClick(data) {
        setSelectedCard(data);
    }

    React.useEffect(() => {
        Promise.all([
            api.getProfileInfo(),
            api.getInitialCards()
        ])
            .then(values => {
                const [userData, initialCards] = values;
                setCards(initialCards);
                setUserData(userData);
            })
            .catch((error) => new Error(`Ошибка: ${error}`));
    });

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
        setSelectedCard({});
    }

    return (
        <>
            <Header/>
            <Main onEditProfile={handleEditProfileClick}
                  onAddPlace={handleAddPlaceClick}
                  onEditAvatar={handleEditAvatarClick}
                  userData={userData}/>
            <Elements onCardClick={handleCardClick}
                      cards={cards}/>
            <Footer/>
            <ImagePopup card={selectedCard}
                        onClose={closeAllPopups}/>
            <PopupWithForm name='edit' title='Редактировать профиль'
                           isOpen={isEditProfilePopupOpen}
                           onClose={closeAllPopups}>
                <input type="text"
                       name="name"
                       placeholder="Жак-Ив Кусто"
                       className="popup__input popup__input_type_name"
                       minLength="2"
                       maxLength="40"
                       id="name-input"
                       required/>
                <span className="popup__error_visible"
                      id="name-input-error"/>
                <input type="text"
                       name="activities"
                       id="activities-input"
                       placeholder="Исследователь океана"
                       className="popup__input popup__input_type_activities"
                       minLength="2"
                       maxLength="200"
                       required/>
                <span className="popup__error_visible"
                      id="activities-input-error"/>
                <button type="submit" className="popup__button">Изменить</button>
            </PopupWithForm>
            <PopupWithForm name='add'
                           title='Новое место'
                           isOpen={isAddPlacePopupOpen}
                           onClose={closeAllPopups}>
                <input type="text"
                       name="title"
                       placeholder="Название"
                       className="popup__input popup__input_type_name"
                       required
                       minLength="1" maxLength="30" id="title-input"/>
                <span className="popup__error_visible"
                      id="title-input-error"/>
                <input type="url"
                       name="url"
                       placeholder="Ссылка на картинку"
                       className="popup__input popup__input_type_activities"
                       required id="url-input"/>
                <span className="popup__error_visible"
                      id="url-input-error"/>
                <button type="submit" className="popup__button">Добавить</button>
            </PopupWithForm>
            <PopupWithForm name='avatar'
                           title='Обновить аватар'
                           isOpen={isEditAvatarPopupOpen}
                           onClose={closeAllPopups}>
                <input type="text"
                       name="link"
                       placeholder="https://somewebsite.com/someimage.jpg"
                       className="popup__input popup__input_type_name"
                       required
                       minLength="1"
                       maxLength="255"
                       id="link-input"/>
                <span className="popup__error_visible"
                      id="link-input-error"/>
                <button type="submit" className="popup__button">Сохранить</button>
            </PopupWithForm>
        </>
    );
}

export default App;

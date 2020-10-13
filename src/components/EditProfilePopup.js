import React from 'react';
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);
  const { setLoadingStatus, onUpdateUser, onClose, isLoading, isOpen} = props;

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoadingStatus(true);

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm name='edit' title='Редактировать профиль'
                   isOpen={isOpen}
                   onClose={onClose}
                   onSubmit={handleSubmit}>
      <input type="text"
             name="name"
             placeholder="Жак-Ив Кусто"
             className="popup__input popup__input_type_name"
             minLength="2"
             maxLength="40"
             id="name-input"
             value={name || ""}
             onChange={handleNameChange}
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
             value={description || ""}
             onChange={handleDescriptionChange}
             required/>
      <span className="popup__error_visible"
            id="activities-input-error"/>
      <button type="submit" className="popup__button">{isLoading ? 'Сохранение...' : 'Изменить'}</button>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

import React from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [title, setTitle] = React.useState('');
  const [url, setUrl] = React.useState('');

  function handleUrlChange(e) {
    setUrl(e.target.value);
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.setLoadingStatus(true);

    props.onAddPlace({
      name: title,
      link: url
    });
  }

  return (
    <PopupWithForm name='add'
                   title='Новое место'
                   isOpen={props.isOpen}
                   onClose={props.onClose}
                   onSubmit={handleSubmit}>
      <input type="text"
             name="title"
             placeholder="Название"
             className="popup__input popup__input_type_name"
             required
             onChange={handleTitleChange}
             minLength="1" maxLength="30" id="title-input"/>
      <span className="popup__error_visible"
            id="title-input-error"/>
      <input type="url"
             name="url"
             placeholder="Ссылка на картинку"
             className="popup__input popup__input_type_activities"
             onChange={handleUrlChange}
             required id="url-input"/>
      <span className="popup__error_visible"
            id="url-input-error"/>
      <button type="submit" className="popup__button">{props.isLoading ? 'Сохранение...' : 'Добавить'}</button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;

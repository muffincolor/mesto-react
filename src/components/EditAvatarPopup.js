import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const linkRef = React.useRef('');
  const { isLoading, isOpen, onClose, onUpdateAvatar, setLoadingStatus} = props;

  function handleLinkChange(e) {
    linkRef.current = e.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoadingStatus(true);

    onUpdateAvatar({
      avatar: linkRef.current,
    });
  }

  return (
    <PopupWithForm name='avatar'
                   title='Обновить аватар'
                   isOpen={isOpen}
                   onClose={onClose}
                   onSubmit={handleSubmit}>
      <input type="text"
             name="link"
             placeholder="https://somewebsite.com/someimage.jpg"
             className="popup__input popup__input_type_name"
             required
             minLength="1"
             maxLength="255"
             ref={linkRef}
             onChange={handleLinkChange}
             id="link-input"/>
      <span className="popup__error_visible"
            id="link-input-error"/>
      <button type="submit" className="popup__button">{isLoading ? 'Сохранение...' : 'Сохранить'}</button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

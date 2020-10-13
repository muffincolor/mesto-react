import React from 'react';
import PopupWithForm from "./PopupWithForm";

function ConfirmationPopup(props) {
  const { setLoadingStatus, cardForDelete, deleteFunction, isLoading, isOpen, onClose} = props;

  function handleSubmit(e) {
    e.preventDefault();
    setLoadingStatus(true);
    deleteFunction(cardForDelete);
  }

  return (
    <PopupWithForm name='confirmation'
                   title='Вы уверены?'
                   isOpen={isOpen}
                   onClose={onClose}
                   onSubmit={handleSubmit}>
      <button type="submit" className="popup__button">{isLoading ? 'Удаление...' : 'Да'}</button>
    </PopupWithForm>
  );
}

export default ConfirmationPopup;

import React from 'react';
import PopupWithForm from "./PopupWithForm";

function ConfirmationPopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.setLoadingStatus(true);
    props.deleteFunction(props.cardForDelete);
  }

  return (
    <PopupWithForm name='confirmation'
                   title='Вы уверены?'
                   isOpen={props.isOpen}
                   onClose={props.onClose}
                   onSubmit={handleSubmit}>
      <button type="submit" className="popup__button">{props.isLoading ? 'Удаление...' : 'Да'}</button>
    </PopupWithForm>
  );
}

export default ConfirmationPopup;

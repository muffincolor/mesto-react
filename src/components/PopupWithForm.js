import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_for_${props.name} popup__close ${props.isOpen ? 'popup_active' : ''}`}>
      <div className="popup__form-block">
        <div className="popup__content">
          <h3 className="popup__title">{props.title}</h3>
            <form className="popup__form" noValidate>
                {props.children}
            </form>
        </div>
        <button className="popup__close-btn" onClick={props.onClose}/>
      </div>
    </div>
  );
}

export default PopupWithForm;

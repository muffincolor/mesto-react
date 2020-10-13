import React from 'react';

function ImagePopup(props) {
  const {isOpen, card, onClose} = props;

  return (
    <div className={`popup popup_for_photo popup__close ${isOpen ? 'popup_active' : ''}`}>
      <div className="popup__image-block">
        <img className="popup__image" alt="Изображение места" src={card.image}/>
        <figure className="popup__caption">{card.caption}</figure>
        <button className="popup__close-btn" onClick={onClose}/>
      </div>
    </div>
  );
}

export default ImagePopup;

import React from 'react';

function ImagePopup(props) {

  return (
    <div className={`popup popup_for_photo popup__close ${Object.keys(props.card).length > 0 ? 'popup_active' : ''}`}>
      <div className="popup__image-block">
        <img className="popup__image" alt="Изображение места" src={props.card.image}/>
          <figure className="popup__caption">{props.card.caption}</figure>
          <button className="popup__close-btn" onClick={props.onClose}/>
      </div>
    </div>
  );
}

export default ImagePopup;

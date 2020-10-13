import React from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card(props) {
  const userInfo = React.useContext(CurrentUserContext);
  const { item, onCardClick, onCardDelete, onCardLike } = props;
  const isOwn = item.owner._id === userInfo._id;
  const isLiked = item.likes.some(i => i._id === userInfo._id);

  function handleLikeClick(evt) {
    onCardLike(item);
  }

  function handleDeleteClick(evt) {
    onCardDelete(item);
  }

  return (
    <li className="element" id={item._id}>
      <button onClick={handleDeleteClick}
              className={`element__delete-button ${isOwn ? 'element__delete-button_visible' : 'element__delete-button_hidden'}`}/>
      <img alt="Фото места" className="element__photo" src={item.link}
           onClick={() => onCardClick({image: item.link, caption: item.name})}/>
      <div className="element__info">
        <h2 className="element__title">{item.name}</h2>
        <button onClick={handleLikeClick}
                className={`element__like-button ${isLiked ? 'element__like-button_status_active' : ''}`}/>
        <span className="element__likes">{item.likes.length}</span>
      </div>
    </li>
  );
}

export default Card;

import React from 'react';

function Elements(props) {
  return (
    <li className="element" id={props.item._id}>
      <img alt="Фото места" className="element__photo" src={props.item.link} onClick={() => props.onCardClick({ image: props.item.link, caption: props.item.name})}/>
      <div className="element__info">
        <h2 className="element__title">{props.item.name}</h2>
        <button className="element__like-button"/>
        <span className="element__likes">{props.item.likes.length}</span>
      </div>
    </li>
  );
}

export default Elements;

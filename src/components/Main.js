import React from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {
  const userInfo = React.useContext(CurrentUserContext);

  return (
    <main className="profile">
      <div className="profile__photo-container" onClick={props.onEditAvatar}>
        <img src={userInfo.avatar} className="profile__photo" alt="Фотография профиля"/>
      </div>
      <div className="profile__info">
        <div className="profile__supporting-block">
          <h1 className="profile__name">{userInfo.name}</h1>
          <button className="profile__edit-button" onClick={props.onEditProfile}/>
        </div>
        <p className="profile__activities">{userInfo.about}</p>
      </div>
      <button className="profile__add-button" onClick={props.onAddPlace}/>
    </main>
  );
}

export default Main;

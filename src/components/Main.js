import React from 'react';
import profileImage from '../images/image.jpg';

function Main(props) {
  const [userName, setUserName] = React.useState('Жак-Ив Кусто');
  const [userDescription , setUserDescription] = React.useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = React.useState(profileImage);

  React.useEffect(() => {
      setUserName(props.userData.name);
      setUserDescription(props.userData.about);
      setUserAvatar(props.userData.avatar);
  }, [props.userData]);

  return (
    <main className="profile">
      <div className="profile__photo-container" onClick={props.onEditAvatar}>
        <img src={userAvatar} className="profile__photo" alt="Фотография профиля" />
      </div>
      <div className="profile__info">
        <div className="profile__supporting-block">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" onClick={ props.onEditProfile }/>
        </div>
        <p className="profile__activities">{userDescription}</p>
      </div>
      <button className="profile__add-button" onClick={ props.onAddPlace }/>
    </main>
  );
}

export default Main;

import React from 'react';
import profileImage from '../images/image.jpg';
import Header from "./Header";

function App() {
  return (
      <>
          <Header/>

          <main className="profile">
              <div className="profile__photo-container">
                  <img src={profileImage} className="profile__photo" alt="Фотография профиля" />
              </div>
              <div className="profile__info">
                  <div className="profile__supporting-block">
                      <h1 className="profile__name">Жак-Ив Кусто</h1>
                      <button className="profile__edit-button"/>
                  </div>
                  <p className="profile__activities">Исследователь океана</p>
              </div>
              <button className="profile__add-button"/>
          </main>

          <section className="elements">
              <ul className="elements__block"/>
          </section>

          <footer className="footer">
              <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
          </footer>
      </>
  );
}

export default App;

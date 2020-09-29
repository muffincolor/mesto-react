import React from 'react';
import api from "../utils/api";
import Card from "./Card"

function Elements(props) {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
      .then(values => {
        setCards(values);
      });
  });

  return (
    <section className="elements">
      <ul className="elements__block">
        {
          cards.map((item, index) => {
            return(<Card item={item} key={index} onCardClick={props.onCardClick}/>);
          })
        }
      </ul>
    </section>
  );
}

export default Elements;

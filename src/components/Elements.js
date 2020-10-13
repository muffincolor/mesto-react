import React from 'react';
import Card from "./Card"
import {CardContext} from "../contexts/CardContext";

function Elements(props) {
  const cards = React.useContext(CardContext);
  const { onCardDelete, onCardLike, onCardClick } = props;

  return (
    <section className="elements">
      <ul className="elements__block">
        {
          Array.from(cards).map((item) => {
            return (<Card onCardDelete={onCardDelete} onCardLike={onCardLike} item={item} key={item._id}
                          onCardClick={onCardClick}/>);
          })
        }
      </ul>
    </section>
  );
}

export default Elements;

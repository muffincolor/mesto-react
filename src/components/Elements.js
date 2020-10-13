import React from 'react';
import Card from "./Card"
import {CardContext} from "../contexts/CardContext";

function Elements(props) {
  const cards = React.useContext(CardContext);

  return (
    <section className="elements">
      <ul className="elements__block">
        {
          Array.from(cards).map((item, index) => {
            return (<Card onCardDelete={props.onCardDelete} onCardLike={props.onCardLike} item={item} key={index}
                          onCardClick={props.onCardClick}/>);
          })
        }
      </ul>
    </section>
  );
}

export default Elements;

import React from 'react';
import Card from "./Card"

function Elements(props) {
  return (
    <section className="elements">
      <ul className="elements__block">
        {
          Array.from(props.cards).map((item, index) => {
            return(<Card item={item} key={index} onCardClick={props.onCardClick}/>);
          })
        }
      </ul>
    </section>
  );
}

export default Elements;

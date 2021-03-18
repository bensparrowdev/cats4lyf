import React from 'react';

export const Photo = (props) => {
  return (
    <section>
      <img src={props.url} alt="cat-Pic" />
      <p>{props.name}</p>
      <p>£{props.price}</p>
      {/* <button>add to basket</button> */}
    </section>
  );
};



import React from 'react';


export const Price = (props) => {
  return (
    <section>
      <p>{props}</p>
    </section>
  )
}

const displayPrices = () => {
  return props.prices.map(price => {
    return price;
  });
}
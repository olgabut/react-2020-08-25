import React from 'react';
import useAmount from '../hooks/use-amount';

export default function Product(props) {
  const { count, decrement, increment } = useAmount(3);

  return (
    <div>
      <p>{props.product.name}</p>
      <p>{props.product.price} $</p>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
}

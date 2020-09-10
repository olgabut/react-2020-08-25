import React, { useMemo } from 'react';

const OrderedProduct = ({ orderedProductId, amount, restaurants }) => {
  const orderedProduct = useMemo(
    () =>
      restaurants
        .map((restaurant) => restaurant.menu)
        .reduce((a, b) => a.concat(b))
        .find((product) => product.id === orderedProductId),
    [orderedProductId, restaurants]
  );

  const fullPrice = useMemo(() => orderedProduct.price * amount, [
    amount,
    orderedProduct,
  ]);

  return (
    <div>
      <div>
        <p>{orderedProduct.name}</p>
        <div>
          <div>
            <div>{amount}</div>
          </div>
        </div>
        <p>{fullPrice}$</p>
      </div>
    </div>
  );
};

export default OrderedProduct;

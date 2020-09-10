import React from 'react';
import { connect } from 'react-redux';
import OrderedProduct from './orderedProduct';

const Order = ({ restaurants, order, fullPrice }) => {
  return (
    <div /*data-id="order"*/>
      <div>
        <div>
          <p>Итого</p>
        </div>
        <div>
          <div>
            {Object.keys(order).map((id) => (
              <OrderedProduct
                key={id}
                orderedProductId={id}
                amount={order[id]}
                restaurants={restaurants}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Order);

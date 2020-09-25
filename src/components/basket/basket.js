import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';
import BasketRow from './basket-row';
import BasketItem from './basket-item';
import Button from '../button';
import { sendOrder } from '../../redux/actions';
import Loader from '../loader';

import {
  orderProductsSelector,
  totalSelector,
  isCheckoutPageSelector,
  orderSendingSelector,
  orderSentSelector,
} from '../../redux/selectors';
import { UserConsumer } from '../../contexts/user';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  isCheckoutPage,
  orderSending,
  orderSent,
  sendOrder,
}) {
  // console.log('render Basket');

  // const { name } = useContext(userContext);

  if (orderSending) return <Loader />;

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  return (
    <div className={styles.basket}>
      <h4 className={styles.title}>
        {/* {`${name}'s basket`} */}
        <UserConsumer>{({ name }) => `${name}'s basket`}</UserConsumer>
      </h4>
      <TransitionGroup>
        {orderProducts.map(({ product, amount, subtotal, restaurantId }) => (
          <CSSTransition
            key={product.id}
            timeout={500}
            classNames="basket-item-animation"
          >
            <BasketItem
              product={product}
              amount={amount}
              subtotal={subtotal}
              restaurantId={restaurantId}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr className={styles.hr} />
      <BasketRow label="Sub-total" content={`${total} $`} />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow label="total" content={`${total} $`} bold />
      {isCheckoutPage && (
        <Button primary block onClick={() => sendOrder()}>
          send order
        </Button>
      )}

      {!isCheckoutPage && (
        <Link to="/checkout">
          <Button primary block>
            checkout
          </Button>
        </Link>
      )}
    </div>
  );
}

export default connect(
  createStructuredSelector({
    total: totalSelector,
    orderProducts: orderProductsSelector,
    isCheckoutPage: isCheckoutPageSelector,
    orderSending: orderSendingSelector,
    orderSent: orderSentSelector,
  }),
  { sendOrder }
)(Basket);

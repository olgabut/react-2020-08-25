import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import cn from 'classnames';
import { increment, decrement, remove } from '../../../redux/actions';
import { Link } from 'react-router-dom';
import Button from '../../button';
import styles from './basket-item.module.css';
import { restaurantByProductSelector } from '../../../redux/selectors';

function BasketItem({
  product,
  restaurantId,
  amount,
  subtotal,
  increment,
  decrement,
  remove,
}) {
  return (
    <div className={styles.basketItem}>
      <div className={styles.name}>
        <Link to={`/restaurants/${restaurantId}/menu`}>{product.name}</Link>
      </div>
      <div className={styles.info}>
        <div className={styles.counter}>
          <Button
            onClick={() => decrement(product.id)}
            icon="minus"
            secondary
            small
          />
          <span className={styles.count}>{amount}</span>
          <Button
            onClick={() => increment(product.id)}
            icon="plus"
            secondary
            small
          />
        </div>
        <p className={cn(styles.count, styles.price)}>{subtotal} $</p>
        <Button
          onClick={() => remove(product.id)}
          icon="delete"
          secondary
          small
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  restaurantId: restaurantByProductSelector(state, ownProps),
});

export default connect(mapStateToProps, { increment, decrement, remove })(
  BasketItem
);

// createStructuredSelector({
//   restaurantId: restaurantByProductSelector,
// })

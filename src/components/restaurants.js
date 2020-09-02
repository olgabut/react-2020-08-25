import React, { useState, useMemo } from 'react';
import Menu from './menu';
import Navigation from './navigation';
import Rate from './rate';

export default function Restaurants(props) {
  const [activeId, setActiveId] = useState(props.restaurants[0].id);

  const activeRestaurant = useMemo(
    () => props.restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, props.restaurants]
  );

  const rate = useMemo(
    () =>
      Math.round(
        activeRestaurant.reviews
          .map((reviews) => reviews.rating)
          .reduce((a, b) => a + b) / activeRestaurant.reviews.length
      ),
    [activeRestaurant.reviews]
  );

  return (
    <div>
      <Navigation
        onRestaurantClick={setActiveId}
        restaurants={props.restaurants}
      />
      <Rate rate={rate} />
      <Menu menu={activeRestaurant.menu} />
    </div>
  );
}

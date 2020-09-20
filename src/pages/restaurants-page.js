import React, { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import Restaurants from '../components/restaurants';
import Loader from '../components/loader';
import {
  restaurantsListSelector,
  restaurantsLoadingSelector,
  restaurantsLoadedSelector,
} from '../redux/selectors';
import { loadRestaurants } from '../redux/actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function RestaurantsPage({
  restaurants,
  loadRestaurants,
  loading,
  loaded,
  match,
  history,
}) {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, []); // eslint-disable-line

  if (loading || !loaded) return <Loader />;

  if (match.isExact) {
    return (
      <div>
        <h2>select restaurant:</h2>
        {restaurants.map(({ id, name }) => (
          <p key={id}>
            <Link to={`/restaurants/${id}/menu`}>{name}</Link>
          </p>
        ))}
      </div>
    );
  }

  return (
    <Route path="/restaurants/:restId/:activeTab" component={Restaurants} />
  );
}

export default connect(
  createStructuredSelector({
    restaurants: restaurantsListSelector,
    loading: restaurantsLoadingSelector,
    loaded: restaurantsLoadedSelector,
  }),
  { loadRestaurants }
)(RestaurantsPage);

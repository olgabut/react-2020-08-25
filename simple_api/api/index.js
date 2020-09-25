const router = require('express').Router();
const { restaurants, products, reviews, users } = require('./mock');
const { reply, getById } = require('./utils');

router.get('/restaurants', (req, res, next) => {
  reply(res, restaurants);
});

router.get('/products', (req, res, next) => {
  const { id } = req.query;
  let result = products;
  if (id) {
    const restaurant = getById(restaurants)(id);
    if (restaurant) {
      result = restaurant.menu.map(getById(result));
    }
  }
  reply(res, result);
});

router.get('/reviews', (req, res, next) => {
  const { id } = req.query;
  let result = reviews;
  if (id) {
    const restaurant = getById(restaurants)(id);
    if (restaurant) {
      result = restaurant.reviews.map(getById(result));
    }
  }
  reply(res, result);
});

router.get('/users', (req, res, next) => {
  reply(res, users);
});

router.post('/order', function (req, res, next) {
  try {
    const total = req.body
      .map(
        ({ id, amount }) =>
          products.find((product) => product.id === id).price * amount
      )
      .reduce((acc, next) => acc + next, 0);

    if (total < 50)
      return reply(
        res,
        `you ordered for $${total}, but the minimum order amount is $50`,
        3000,
        400
      );
    if (total > 200)
      return reply(
        res,
        `you ordered for $${total}, but the maximum order amount is $200`,
        3000,
        400
      );
    return reply(res, 'ok', 3000);
  } catch (error) {
    return reply(res, error.toString(), 1000, 400);
  }
});

module.exports = router;

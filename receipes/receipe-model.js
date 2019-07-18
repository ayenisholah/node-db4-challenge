const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
  getReceipes,
  getShoppingList
};

function getReceipes() {
  return db('ingredients');
}

function getShoppingList(receipe_id) {
  return db('ingredients as i')
    .select('i.id', 'i.quantity_grams')
    .where({ id: receipe_id });
}
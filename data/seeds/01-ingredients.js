
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {ingredient_name: 'Flour', quantity_grams: '500'},
    {ingredient_name: 'Eggs', quantity_grams: '12'},
    {ingredient_name: 'Butter', quantity_grams: '500'},
    {ingredient_name: 'Sugar', quantity_grams: '400'},
    {ingredient_name: 'Baking Powder', quantity_grams: '3'},
    {ingredient_name: 'Vanilla Extract', quantity_grams: '3'},
    {ingredient_name: 'Brandy', quantity_grams: '0.5'}
  ]);
};
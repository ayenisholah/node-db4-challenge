
exports.seed = function(knex) {
  return knex('steps').insert([
    {ingredient_id: 3, step_number: 1, instructions: 'Cream the butter and the sugar'},
    {ingredient_id: 4, step_number: 1, instructions: 'Cream the butter and the sugar'},
    {ingredient_id: 2, step_number: 2, instructions: 'Beat the Eggs'},
    {ingredient_id: 3, step_number: 3, instructions: 'Add the eggs and mix'},
    {ingredient_id: 4, step_number: 3, instructions: 'Add the eggs and mix'},
    {ingredient_id: 2, step_number: 3, instructions: 'Add the eggs and mix'},
    {ingredient_id: 1, step_number: 4, instructions: 'Add the plain flour with the baking powder'},
    {ingredient_id: 5, step_number: 4, instructions: 'Add the plain flour with the baking powder'},
    {ingredient_id: 1, step_number: 5, instructions: 'Pour the cake mix into the greased cake pan'},
    {ingredient_id: 2, step_number: 5, instructions: 'Pour the cake mix into the greased cake pan'},
    {ingredient_id: 3, step_number: 5, instructions: 'Pour the cake mix into the greased cake pan'},
    {ingredient_id: 4, step_number: 5, instructions: 'Pour the cake mix into the greased cake pan'},
    {ingredient_id: 5, step_number: 5, instructions: 'Pour the cake mix into the greased cake pan'}
  ]);
};
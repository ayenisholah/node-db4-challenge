
exports.up = function(knex) {
  return knex.schema
    .createTable('ingredients', table => {
      table.increments();
      table.text('ingredient_name', 128)
        .unique()
        .notNullable();
      table.integer('quantity_grams');
    })

    .createTable('steps', table => {
      table.increments();
      table.integer('step_number')
        .unsigned()
        .notNullable();
      table.text('instructions')
        .notNullable();
      table.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps');
};

exports.up = function(knex) {
  return knex.schema.createTable('menu', function(table) {
    table.increments('id').primary();
    table.string('name', 100).notNullable();
    table.text('description');
    table.decimal('price', 10, 2).notNullable();
    table.text('image_url');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('menu');
}; 
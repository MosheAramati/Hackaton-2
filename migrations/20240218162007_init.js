/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('heroes', function (table) {
            table.increments('id').primary();
            table.string('name', 255).notNullable();
            table.text('about_me');
            table.string('name_in_hebrew', 255);
        })
        .createTable('photos', function (table) {
            table.increments('id').primary();
            table.string('photo', 1024).notNullable();
            table.integer('hero_id').unsigned().notNullable();
            table.foreign('hero_id').references('heroes.id').onDelete('CASCADE');
        });
};

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTable('photos')
        .dropTable('heroes');
};

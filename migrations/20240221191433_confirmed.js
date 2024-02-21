/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .table('heroes', function (table) {
        table.boolean('confirmed').defaultTo(false);
    });
};

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .table('heroes', function(table) {
        table.dropColumn('confirmed'); // Removes the "confirmed" column
    });
};

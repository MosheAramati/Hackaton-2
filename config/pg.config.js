const config = require('../knexfile'); // Adjust the path as necessary
const pgConfig = require('knex')(config);

module.exports = pgConfig;
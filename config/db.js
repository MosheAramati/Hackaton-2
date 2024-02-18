const config = require('../knexfile'); // Adjust the path as necessary
const db = require('knex')(config);

module.exports = db;
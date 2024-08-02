const { Pool } = require('pg');

module.exports = new Pool({
  host: "localhost",
  user: "kenny",
  database: "message_board",
  password: "asdfghjkl",
  port: 5432,
});
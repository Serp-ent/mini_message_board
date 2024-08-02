const pool = require('./pool');


async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function insertMessage(msg) {
  await pool.query('INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)', [msg.text, msg.username, msg.added]);
}

async function getMessageWithId(id) {
  const result = await pool.query('SELECT * FROM messages WHERE id = $1', [id])
  return result.rowCount > 0 ? result.rows[0] : null;
}

module.exports = {
  getAllMessages,
  insertMessage,
  getMessageWithId,
}
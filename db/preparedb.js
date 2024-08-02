const { Pool } = require('pg');

const pool = new Pool({
  user: 'yourusername',
  host: 'localhost',
  database: 'yourdatabase',
  password: 'yourpassword',
  port: 5432,
});

const createTableQuery = `
  CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    text VARCHAR(255) NOT NULL,
    user VARCHAR(100) NOT NULL,
    added TIMESTAMP NOT NULL
  );
`;

const insertData = `INSERT INTO messages (text, username, added) VALUES
('Hi there!', 'Amando', '2024-08-02 12:34:56'),
('Hello!', 'Brian', '2024-08-02 13:00:00'),
('Good morning', 'Catherine', '2024-08-02 08:00:00'),
('How are you?', 'David', '2024-08-02 14:45:00'),
('Good night', 'Eva', '2024-08-02 22:10:00');`;

(async () => {
  try {
    await pool.query(createTableQuery);
    console.log('Table created successfully.');
    await pool.query(insertData);
    console.log('Recored inserted successfullly');
  } catch (err) {
    console.error('Error creating table:', err);
  } finally {
    await pool.end();
  }
})();
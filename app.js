const express = require('express');
const RootRouter = require('./routes/RootRoute');

const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');

app.use('/', RootRouter);

app.listen(PORT, () => {
  console.log("Started listening at port: %d", PORT);
});
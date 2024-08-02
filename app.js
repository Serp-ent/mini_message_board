const express = require('express');
const RootRouter = require('./routes/RootRoute');
const messageRouter = require('./routes/MessageRouter');
const db = require('./db/queries');
const asyncHandler = require('express-async-handler');

const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');

app.use('/', RootRouter);
app.use('/new', messageRouter);

// TODO: this should have own route
// additionaly there should be controllers that do the hard work
app.get('/msgs/:id', asyncHandler(async (req, res) => {
  const msg = await db.getMessageWithId(req.params.id);
  console.log(msg);
  if (!msg) {
    throw new Error('No message with given ID');

  }
  res.render('messageDetails', { message: msg });
}));

app.use((err, req, res, next) => {
  res.send(err.message);
});

app.listen(PORT, () => {
  console.log("Started listening at port: %d", PORT);
});
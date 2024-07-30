const express = require('express');
const RootRouter = require('./routes/RootRoute');
const messageRouter = require('./routes/MessageRouter');
const messages = require('./messages');

const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');

app.use('/', RootRouter);
app.use('/new', messageRouter);

// TODO: this should have own route
// additionaly there should be controllers that do the hard work
app.get('/msgs/:id', (req, res) => {
  res.render('messageDetails', { message: messages.at(req.params.id) });
});

app.listen(PORT, () => {
  console.log("Started listening at port: %d", PORT);
});
const { Router } = require('express');

const messageRouter = Router();

messageRouter.get('/', (req, res) => {
  res.send('Message router');
});

module.exports = messageRouter;
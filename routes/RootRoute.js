const RootRouter = require('express').Router();
const messages = require('../messages');


RootRouter.get('/', (req, res) => {
  res.render('index',
    {
      title: "Mini Messageboard",
      messages: messages
    });
});


module.exports = RootRouter;
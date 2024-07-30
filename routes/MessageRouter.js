const { Router } = require('express');
const express = require('express');
const messages = require('../messages');

const messageRouter = Router();

messageRouter.use(express.urlencoded({ extended: true }));

messageRouter.get('/', (req, res) => {
  res.render('form');
});


messageRouter.post('/', (req, res) => {
  // TODO: addd to the messages
  messages.push(
    {
      text: req.body.text,
      user: req.body.authorName,
      added: new Date(),
    });

  res.redirect('/');
});

module.exports = messageRouter;
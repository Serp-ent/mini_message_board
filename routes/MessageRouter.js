const { Router } = require('express');
const express = require('express');
const db = require('../db/queries');

const messageRouter = Router();

messageRouter.use(express.urlencoded({ extended: true }));

messageRouter.get('/', (req, res) => {
  res.render('form');
});


messageRouter.post('/', (req, res) => {
  // TODO: addd to the messages
  const msg = {
    text: req.body.text,
    username: req.body.authorName,
    added: new Date(),
  };
  console.log('inserting', msg);
  db.insertMessage(msg);

  res.redirect('/');
});


module.exports = messageRouter;
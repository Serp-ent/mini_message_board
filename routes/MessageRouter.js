const { Router } = require('express');
const express = require('express');

const messageRouter = Router();

messageRouter.use(express.urlencoded({ extended: true }));

messageRouter.get('/', (req, res) => {
  res.render('form');
});


messageRouter.post('/', (req, res) => {
  console.log(`User sent: ${req.body}`);
  console.log(`author name: ${req.body.authorName}`);
  console.log(`text: ${req.body.text}`);
  console.log(`date: ${new Date()}`);
});

module.exports = messageRouter;
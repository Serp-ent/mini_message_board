const RootRouter = require('express').Router();
const db = require('../db/queries');


RootRouter.get('/', async (req, res) => {
  const messages = await db.getAllMessages();

  res.render('index', { title: 'All messages', messages });
});

module.exports = RootRouter;
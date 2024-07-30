const { Router } = require('express');

const RootRouter = Router();

RootRouter.get('/', (req, res) => {
  res.render('index', { message: "Hello World" });
});

module.exports = RootRouter;
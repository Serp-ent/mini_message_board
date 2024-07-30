const { Router } = require('express');

const RootRouter = Router();

RootRouter.get('/', (req, res) => {
  res.send("Root Router index");
});

module.exports = RootRouter;
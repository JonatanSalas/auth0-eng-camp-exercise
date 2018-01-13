const { Router } = require("express");

const pingRouter = require("./api/ping");
const counterRouter = require("./api/counter");

const appRouter = new Router();

appRouter.use(pingRouter);
appRouter.use(counterRouter);

module.exports = appRouter;

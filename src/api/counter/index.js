const { Router } = require("express");
const { celebrate, Joi } = require("celebrate");

const Controller = require("./controller");
const Logger = require("../../logger");

const router = new Router();

router.get(
    "/count",
    celebrate({ query: { input: Joi.string().required() } }),
    (req, res) => {
        Logger.info(`> Router - GET Request at http://${process.env.HOST}:${process.env.PORT}/count?input=${req.query.input}`);

        const result = Controller.getAllCharCount(req.query.input);

        res.status(200);
        res.setHeader("content-type", "application/json; charset=utf-8");
        res.json(result);
    }
);

module.exports = router;

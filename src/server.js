const Express = require("express");
const celebrate = require("celebrate");
const bodyParser = require("body-parser");

const router = require("./router");
const Logger = require("./logger");

class Server {
    static start() {
        const app = new Express();

        app.use(bodyParser.json());
        app.use(router);
        app.use(celebrate.errors());

        app.listen(process.env.PORT, process.env.HOST, err => {
            if (err) {
                Logger.error(`> Server - It seems something went wrong when app was starting. Check out the error `, err);
            }

            Logger.info(`> Server - Up at the following location: http://${process.env.HOST}:${process.env.PORT} \n`);
        });
    }
};

module.exports = Server;
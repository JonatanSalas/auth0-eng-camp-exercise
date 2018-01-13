const Env = require("dotenv");
const Server = require("./src/server");

Env.config();
Server.start();
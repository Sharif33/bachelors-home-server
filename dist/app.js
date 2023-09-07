"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const dbConnect_1 = require("./app/utils/dbConnect");
const app = (0, express_1.default)();
exports.app = app;
//using cors
app.use((0, cors_1.default)());
//parse data
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//db connection
(0, dbConnect_1.dbconnect)();
//import all routes
const houses_router5_1 = __importDefault(require("./app/modules/houses/houses.router5"));
const users_router_1 = __importDefault(require("./app/modules/users/users.router"));
//default route
app.get("/", (req, res) => {
    res.send("Welcome to Bachelors Home server");
});
//custom routes path
app.use("/api/v1", houses_router5_1.default);
app.use("/api/v1", users_router_1.default);

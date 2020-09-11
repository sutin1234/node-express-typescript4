"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
dotenv_1.default.config();
const app = express_1.default();
const port = process.env.SERVER_PORT || 8080;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', (req, res, next) => {
    res.send('Express Typescript 4.0');
});
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

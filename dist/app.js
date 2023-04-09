import express, { json } from "express";
import { convertCLTToPj } from "./controllers/calculator.controllers.js";
import { tip } from "./controllers/tip.controllers.js";
var server = express();
server.use(json());
server.post('/health', function (req, res) {
    res.send('ok');
});
server.get('/calculator', convertCLTToPj);
server.post('/tip', tip);
server.listen(4000, function () {
    console.log('Rodando');
});

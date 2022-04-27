"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// const express = require('express')
var app = express_1.default();
var port = 3001;
app.get('/', function (req, res) {
    res
        .status(201)
        .json({
        ok: true,
        message: "saved! adadadasd",
    });
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});

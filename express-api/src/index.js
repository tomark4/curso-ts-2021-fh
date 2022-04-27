"use strict";
exports.__esModule = true;
var express_1 = require("express");
// const express = require('express')
var app = (0, express_1["default"])();
var port = 3001;
app.get('/', function (req, res) {
    res
        .status(201)
        .json({
        ok: true,
        message: "saved!asdasd"
    });
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});

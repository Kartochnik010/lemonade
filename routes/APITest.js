const express = require("express");
const https = require('https');
const router = express.Router();

router
    .route("/")
    .get((req, res) => res.sendFile(__dirname+'/APITest.ejs'))


module.exports = router;

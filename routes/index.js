const express = require("express");
const {application} = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(__dirname+'/index.ejs'))


module.exports = router;

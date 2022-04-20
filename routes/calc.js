const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();

router
    .route("/")
    .get((req, res) => res.sendFile(__dirname+'/calc.ejs'))
    .post((req, res) =>{
        let num1 = Number(req.body.num1)
        let num2 = Number(req.body.num2)
        let result = num1 + num2
        res.send("Result: " + result +
            "<br><br><br><br>" +
            "<a href=\"/calc\">Previous page</a>")
    })

module.exports = router;

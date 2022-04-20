const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", require("./routes/index"))
app.use("/calc", require("./routes/calc"))
app.use("/APITest", require("./routes/APITest"))
app.use("/apireq", require("./routes/apireq"))
app.use("/game", require("./routes/game"))


app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
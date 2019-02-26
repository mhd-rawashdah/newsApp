const express = require('express');
const bodyParser = require('body-parser');
const router = require("./routes");
const path = require("path");
let app = express();

// NOTE : add the allow origion
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Note: add bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.route

app.use(express.static(__dirname + '/../client/src'));
app.use(express.static(__dirname + '/../node_modules'));

// Note: activate the router
app.use('/', router);

// All remaining requests return the React app, so it can handle routing.
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../client/src", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
   console.error(`Server listening on port ${PORT}`);
});

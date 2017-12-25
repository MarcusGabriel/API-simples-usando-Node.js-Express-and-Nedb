var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var routes = require('../app/routes');

app.use(cors());
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

module.exports = app;
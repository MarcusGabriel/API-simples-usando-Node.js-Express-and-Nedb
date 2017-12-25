var http = require('http');
var app = require('./config/app');
var db = require('./config/db');

http.createServer(app).listen(8081, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});


var Database = require('nedb');
var dbName = 'data.db';
var db;

if(!db) {
    db = new Database({
        filename: dbName, 
        autoload: true 
    });
    console.log('Banco ' + dbName + ' pronto para uso')
}

module.exports = db;
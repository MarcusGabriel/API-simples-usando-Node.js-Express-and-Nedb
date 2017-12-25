var db = require('../../config/db');

var api = {};

api.adiciona = function(req, res) {
    db.insert(req.body, function(err, newDoc){
        if(err) return console.log(err);
        console.log('Adicionado com sucesso o item: ' + newDoc._id);
        res.json(newDoc._id);
    });
};

api.lista = function(req, res){
    db.find({}).sort({produtoId: 1}).exec(function(err, doc){
        if(err) return console.log(err);
        res.json(doc);
    });
};

api.busca = function(req, res){
    db.findOne({_id: req.params.produtoId}, function(err, doc){
        if(err) return console.log(err);
        res.json(doc);
    });
};

api.atualiza = function(req, res) {
    db.update({_id: req.params.produtoId}, req.body, function(err, numReplaced){
        if(err) return console.log(err);
        if(numReplaced) 
            res.status(200).end()
        else
            res.status(500).end();
        console.log('Atualizado com sucesso: '+ req.body._id);
        res.status(200).end();
    });
};

api.listaPorCategoria = function(req, res) {
    var categoriaId = parseInt(req.params.categoriaId);
    db.find({categoria: categoriaId}, function(err, doc){
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.remove = function(req, res) {
    db.remove({_id: req.params.produtoId}, {}, function(err, numRemoved){
        if(err) return console.log(err);
        console.log('removido com sucesso');
        if(numRemoved) res.status(200).end();
        res.status(500).end();
    });
};

api.listaCategorias = function(req, res) {
    res.json([
        {
            _id: 1,
            nome: 'Eletrônico'
        },
        {
            _id: 2,
            nome: 'Livro'
        },
        {
            _id: 3,
            nome: 'Música'
        }
    ])
}

module.exports = api;
var api = require('../api');
var path = require('path');

module.exports = function(app) {

    app.route('/produtos')
        .post(api.adiciona)
        .get(api.lista);

    app.route('/produtos/:produtoId')
        .delete(api.remove)
        .get(api.busca)
        .put(api.atualiza);

    app.get('/categorias', api.listaCategorias);
    app.get('/produtos/categoria/:categoriaId', api.listaPorCategoria);
    

}
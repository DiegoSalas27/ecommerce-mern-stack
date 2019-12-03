const categoriaController = require('../controllers').categoria;

module.exports = (app) => {
    app.post('/api/categoria', categoriaController.create);
    
    app.get('/api/categoria', categoriaController.getAll);

    app.get('/api/categoria/:categoriaId', categoriaController.get);

    app.put('/api/categoria/:categoriaId', categoriaController.update);

    app.delete('/api/categoria/:categoriaId', categoriaController.delete);
}
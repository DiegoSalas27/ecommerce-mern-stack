const productoController = require('../controllers').producto;

module.exports = (app) => {
    app.post('/api/producto', productoController.create);
    
    app.get('/api/producto', productoController.getAll);

    app.get('/api/producto/:productoId', productoController.get);

    app.put('/api/producto/:productoId', productoController.update);

    app.delete('/api/producto/:productoId', productoController.delete);
}
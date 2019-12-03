const usuarioController = require('../controllers').usuario;

module.exports = (app) => {
    app.post('/api/usuario/signup', usuarioController.signup);

    app.post('/api/usuario/signin', usuarioController.signin);
    
    app.get('/api/usuario', usuarioController.getAll);

    app.get('/api/usuario/:usuarioId', usuarioController.get);

    app.put('/api/usuario/:usuarioId', usuarioController.update);

    app.delete('/api/usuario/:usuarioId', usuarioController.delete);
}
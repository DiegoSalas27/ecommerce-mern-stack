const categoriaRoutes = require('./categoriaRoutes');
const productoRoutes = require('./productoRoutes');
const usuarioRoutes = require('./usuarioRoutes');

module.exports = (app) => {
    categoriaRoutes(app);
    productoRoutes(app);
    usuarioRoutes(app);
}
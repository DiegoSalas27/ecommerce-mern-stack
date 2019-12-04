const Producto = require('../../models').Producto;

module.exports = {
    create(req, res) {
        return Producto
                .create({
                    nombre: req.body.nombre,
                    descripcion: req.body.descripcion,
                    precio: req.body.precio,
                    categoriaId: req.body.categoriaId
                })
                .then(categoria => res.status(201).send({
                    message: 'Se ha creado un nuevo producto.'
                }))
                .catch(err => res.status(400).send(err));
    },

    getAll(req, res) {
        const categoria = req.query.categoria;
        if(!categoria) {
            return Producto
            .findAndCountAll()
            .then(result => res.status(201).send({
                productos: result.rows,
                count: result.count,

            }))
            .catch(err => res.status(400).send(err));
        } else {
            return Producto
            .findAndCountAll({
                where:{
                    categoriaId: categoria
                }
            })
            .then(result => res.status(201).send({
                productos: result.rows,
                count: result.count,

            }))
            .catch(err => res.status(400).send(err));
        }
    },

    get(req, res) {
        return Producto
            .findByPk(req.params.productoId)
            .then(producto => res.status(201).send({
                producto
            }))
            .catch(err => res.status(400).send(err));
    },

    update(req, res) {
        Producto
            .update(
                {
                    nombre: req.body.nombre,
                    descripcion: req.body.descripcion,
                    precio: req.body.precio,
                    categoriaId: req.body.categoriaId
                },
                {
                    where: {id: req.params.productoId}
                }
            )
            .then(producto => res.status(201).send({
                response: 'producto actualizado.'
            }))
            .catch(err => res.status(400).send(err));
    },

    delete(req, res) {
        Producto.destroy({
            where: {id: req.params.productoId}
        })
        .then(producto => res.status(201).send({
            response: 'producto eliminado.'
        }))
        .catch(err => res.status(400).send(err));
    }
}

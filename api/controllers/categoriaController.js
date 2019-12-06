const Categoria = require('../../models').Categoria;

module.exports = {
    create(req, res) {
        return Categoria
                .create({
                    nombre: req.body.nombre,
                    descripcion: req.body.descripcion
                })
                .then(categoria => res.status(201).send({
                    message: 'Se ha creado nueva categoría.'
                }))
                .catch(err => res.status(400).send(err));
    },

    getAll(req, res) {
        return Categoria
            .findAndCountAll({
                attributes: ['id', 'nombre', 'descripcion']
            })
            .then(result => res.status(201).send({
                categorias: result.rows,
                count: result.count,

            }))
            .catch(err => res.status(400).send(err));
    },

    get(req, res) {
        return Categoria
            .findByPk(req.params.categoriaId)
            .then(categoria => res.status(201).send({
                categoria: categoria
            }))
            .catch(err => res.status(400).send(err));
    },

    update(req, res) {
        Categoria
            .update(
                {
                    nombre: req.body.nombre,
                    descripcion: req.body.descripcion
                },
                {
                    where: {id: req.params.categoriaId}
                }
            )
            .then(categoria => res.status(201).send({
                response: 'categoría actualizada.'
            }))
            .catch(err => res.status(400).send(err));
    },

    delete(req, res) {
        Categoria.destroy({
            where: {id: req.params.categoriaId}
        })
        .then(categoria => res.status(201).send({
            response: 'categoría eliminada.'
        }))
        .catch(err => res.status(400).send(err));
    }
}
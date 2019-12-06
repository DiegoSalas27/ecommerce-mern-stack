const Usuario = require('../../models').Usuario;
const jwt = require('jsonwebtoken');
const bcrypt   = require('bcryptjs');

module.exports = {
    signup(req, res) {
        Usuario
            .findAll({
                where:{
                    usuario: req.body.usuario
                }
            })
            .then(user => {
                if(user.length >= 1) {
                    return res.status(409).json({
                        message: 'El usuario ya existe.'
                    });
                } else {
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(req.body.password, salt, (err, hash) => {
                            if(err) throw err;
                            Usuario.create({
                                usuario: req.body.usuario,
                                password: hash
                            })
                            .then(usuario => res.status(201).send({
                                message: 'Se ha creado nuevo usuario.'
                            }))
                            .catch(err => res.status(400).send(err));
                        })
                    })
                    
                }
            })
            .catch(err => {
                res.status(500).json({error: err});
            });
    },

    signin(req, res) {
        Usuario
            .findAll({
                where:{
                    usuario: req.body.usuario
                }
            })
            .then(user => {
                if(user.length < 1) {
                    return res.status(409).json({
                        message: 'El correo o contraseña ingresada son incorrectos.'
                    });
                } 
                bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                    if (err) {
                        return res.status(401).json({
                            message: 'El correo o contraseña ingresada son incorrectos'
                        });
                    }
                    if (result) {
                        const token = jwt.sign({
                            usuario: user[0].usuario,
                            userId: user[0].id,
                        }, "secret",
                        {
                            expiresIn: "1h" 
                        })
                        return res.status(200).json({
                            message: 'Auth successful',
                            token: token
                        });
                    }
                    res.status(401).json({
                        message: 'El correo o contraseña ingresada son incorrectos'
                    });
                })
            })
            .catch(err => {
                res.status(500).json({error: err});
            });
    },

    getAll(req, res) {
        return Usuario
            .findAndCountAll({
                attributes: ['id', 'usuario', 'password']
            })
            .then(result => res.status(201).send({
                usuarios: result.rows,
                count: result.count,

            }))
            .catch(err => res.status(400).send(err));
    },

    get(req, res) {
        return Usuario
            .findByPk(req.params.usuarioId)
            .then(usuario => res.status(201).send({
                usuario: usuario
            }))
            .catch(err => res.status(400).send(err));
    },

    update(req, res) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if(err) throw err;
                Usuario
                .update(
                    {
                        usuario: req.body.usuario,
                        password: hash
                    },
                    {
                        where: {id: req.params.usuarioId}
                    }
                )
                .then(usuario => res.status(201).send({
                    response: 'usuario actualizado.'
                }))
                .catch(err => res.status(400).send(err));
            })
        })
    },

    delete(req, res) {
        Usuario.destroy({
            where: {id: req.params.usuarioId}
        })
        .then(usuario => res.status(201).send({
            response: 'usuario eliminado.'
        }))
        .catch(err => res.status(400).send(err));
    }
}
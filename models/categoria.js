'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define('Categoria', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Categoria.associate = function(models) {
    Categoria.hasMany(models.Producto,{
      foreignKey: 'categoriaId',
      as: 'productos'
    })
  };
  return Categoria;
};
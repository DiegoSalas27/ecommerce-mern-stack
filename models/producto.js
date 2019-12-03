'use strict';
module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define('Producto', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    precio: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  Producto.associate = function(models) {
    Producto.belongsTo(models.Categoria,{
      foreignKey: 'categoriaId',
      onDelete: 'CASCADE'
    })
  };
  return Producto;
};
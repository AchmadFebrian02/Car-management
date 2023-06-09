'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mobil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mobil.init({
    nama_mobil: DataTypes.STRING,
    ukuran: DataTypes.STRING,
    foto: DataTypes.TEXT,
    harga_sewa: DataTypes.FLOAT,
    createdBy:{
      type:DataTypes.STRING,
      allowNull: false
    },
    updatedBy:{
      type:DataTypes.STRING,
      allowNull: false
    },
    deletedBy:{
      type:DataTypes.STRING,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'Mobil',
  });
  return Mobil;
};
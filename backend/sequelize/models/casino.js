'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Casino extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Casino.hasMany(models.Player,{
        foreignKey:'idCasino'
      })
    }
  };
  Casino.init({
    namee: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Casino',
    freezeTableName:true
  });
  return Casino;
};
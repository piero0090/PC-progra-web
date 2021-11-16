'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Player.belongsTo(models.Casino,{
        foreignKey:'idCasino'
      })
    }
  };
  Player.init({
    names: DataTypes.STRING,
    acumprofit: DataTypes.INTEGER,
    bets: DataTypes.INTEGER,
    promprofit: DataTypes.INTEGER,
    idCasino: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Player',
    freezeTableName:true
  });
  return Player;
};
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Player', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      names: {
        type: Sequelize.STRING
      },
      acumprofit: {
        type: Sequelize.INTEGER
      },
      bets: {
        type: Sequelize.INTEGER
      },
      promprofit: {
        type: Sequelize.INTEGER
      },
      idCasino: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint('Player',{
      type:'FOREIGN KEY',
      fields:['idCasino'],
      name:'FK_Player_Casino',
      references:{
        table:'Casino',
        field:'id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Player','FK_Player_Casino');
    await queryInterface.dropTable('Player');
  }
};
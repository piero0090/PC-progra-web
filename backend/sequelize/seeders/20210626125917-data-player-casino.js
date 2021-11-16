'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Casino',[{
     namee:'CASINO JAVA',
     createdAt:new Date(),
     updatedAt:new Date()
   },{
     namee:'CASINO PYTHON',
     createdAt:new Date(),
     updatedAt:new Date()
   },{
     namee:'CASINO JAVASCRIPT',
     createdAt:new Date(),
     updatedAt:new Date()
   }])

   await queryInterface.bulkInsert('Player',[{
      names:'Piero Cuzcano',
      acumprofit:200,
      bets:7,
      promprofit:28,
      idCasino:1,
      createdAt:new Date(),
      updatedAt:new Date()
   },{
      names:'Leo Messi',
      acumprofit:600,
      bets:6,
      promprofit:100,
      idCasino:2,
      createdAt:new Date(),
      updatedAt:new Date()
   },{
      names:'Gianluca Lapadula',
      acumprofit:120,
      bets:3,
      promprofit:40,
      idCasino:3,
      createdAt:new Date(),
      updatedAt:new Date()
   }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Player',null,{});
    await queryInterface.bulkDelete('Casino',null,{});
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return await queryInterface.createTable('teams',
      {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        location: { type: Sequelize.STRING },
        mascot: { type: Sequelize.STRING },
        abbreviation: { type: Sequelize.STRING },
        conference: { type: Sequelize.ENUM('AFC', 'NFC') },
        division: { type: Sequelize.ENUM('North', 'South', 'East', 'West') },
        createdAt: {
          type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
        },
        deletedAt: { type: Sequelize.DATE }
      })

  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return await queryInterface.dropTable('teams')
  }
}

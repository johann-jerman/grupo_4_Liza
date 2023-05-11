'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('images', [
      {
        image: '1.1.RemeraRosa.jpg'//1
      },
      {
        image: '1.2.RemeraRosa.jpg'//2
      },
      {
        image: '1.3.RemeraRosa.jpg'//3
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

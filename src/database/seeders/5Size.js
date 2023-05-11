'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
    Example:
    */
    await queryInterface.bulkInsert('sizes', [
      {
        size: 'XS'//1
      },
      {
        size: 'S'//2
      },
      {
        size: 'M'//3
      },
      {
        size: 'L'//4
      },
      {
        size: 'XL'//5
      },
      {
        size: 'XXL'//6
      },
      {
        size: 'XXXL'//7
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

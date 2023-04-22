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
        size: 'XS'
      },
      {
        size: 'S'
      },
      {
        size: 'M'
      },
      {
        size: 'L'
      },
      {
        size: 'XL'
      },
      {
        size: 'XXL'
      },
      {
        size: 'XXXL'
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

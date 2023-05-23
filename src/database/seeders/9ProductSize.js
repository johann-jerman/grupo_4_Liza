'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('size_products', [
      {
        size_id: 2,
        product_id: 1,
      },
      {
        size_id: 5,
        product_id: 1,
      },
      {
        size_id: 6,
        product_id: 1,
      },
      {
        size_id: 2,
        product_id: 2,
      },
      {
        size_id: 5,
        product_id: 2,
      },
      {
        size_id: 6,
        product_id: 2,
      },
      {
        size_id: 2,
        product_id: 3,
      },
      {
        size_id: 5,
        product_id: 3,
      },
      {
        size_id: 6,
        product_id: 3,
      },
      {
        size_id: 2,
        product_id: 4,
      },
      {
        size_id: 5,
        product_id: 4,
      },
      {
        size_id: 6,
        product_id: 4,
      },
      {
        size_id: 5,
        product_id: 5,
      },
      {
        size_id: 6,
        product_id: 5,
      },
      {
        size_id: 5,
        product_id: 6,
      },
      {
        size_id: 6,
        product_id: 6,
      },
      {
        size_id: 5,
        product_id: 7,
      },
      {
        size_id: 6,
        product_id: 7,
      },
      {
        size_id: 5,
        product_id: 8,
      },
      {
        size_id: 6,
        product_id: 8,
      },
      {
        size_id: 5,
        product_id: 9,
      },
      {
        size_id: 6,
        product_id: 9,
      },
      {
        size_id: 5,
        product_id: 10,
      },
      {
        size_id: 6,
        product_id: 10,
      },
      {
        size_id: 5,
        product_id: 11,
      },
      {
        size_id: 6,
        product_id: 11,
      },
      {
        size_id: 5,
        product_id: 12,
      },
      {
        size_id: 6,
        product_id: 12,
      },
      {
        size_id: 5,
        product_id: 13,
      },
      {
        size_id: 6,
        product_id: 13,
      },
      {
        size_id: 5,
        product_id: 14,
      },
      {
        size_id: 6,
        product_id: 14,
      },
      {
        size_id: 5,
        product_id: 15,
      },
      {
        size_id: 6,
        product_id: 15,
      },
      {
        size_id: 5,
        product_id: 16,
      },
      {
        size_id: 6,
        product_id: 16,
      },
      {
        size_id: 5,
        product_id: 17,
      },
      {
        size_id: 6,
        product_id: 17,
      },
      {
        size_id: 5,
        product_id: 18,
      },
      {
        size_id: 6,
        product_id: 18,
      },
      {
        size_id: 5,
        product_id: 19,
      },
      {
        size_id: 6,
        product_id: 19,
      },
      {
        size_id: 5,
        product_id: 20,
      },
      {
        size_id: 6,
        product_id: 20,
      },
      {
        size_id: 5,
        product_id: 21,
      },
      {
        size_id: 6,
        product_id: 21,
      },
      {
        size_id: 5,
        product_id: 22,
      },
      {
        size_id: 6,
        product_id: 22,
      },
      {
        size_id: 4,
        product_id: 23,
      },
      {
        size_id: 2,
        product_id: 23,
      },
      {
        size_id: 4,
        product_id: 24,
      },
      {
        size_id: 2,
        product_id: 24,
      },
      {
        size_id: 4,
        product_id: 25,
      },
      {
        size_id: 2,
        product_id: 25,
      },
      {
        size_id: 4,
        product_id: 26,
      },
      {
        size_id: 2,
        product_id: 26,
      },
      {
        size_id: 4,
        product_id: 27,
      },
      {
        size_id: 2,
        product_id: 27,
      },
      {
        size_id: 4,
        product_id: 28,
      },
      {
        size_id: 2,
        product_id: 28,
      },
      {
        size_id: 4,
        product_id: 29,
      },
      {
        size_id: 2,
        product_id: 29,
      },
      {
        size_id: 4,
        product_id: 30,
      },
      {
        size_id: 2,
        product_id: 30,
      },
      {
        size_id: 4,
        product_id: 31,
      },
      {
        size_id: 2,
        product_id: 31,
      },
      {
        size_id: 4,
        product_id: 32,
      },
      {
        size_id: 2,
        product_id: 32,
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

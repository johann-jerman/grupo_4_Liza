'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('color_products', [
      {
        color_id: 2,
        product_id: 1,
      },
      {
        color_id: 6,
        product_id: 1,
      },
      {
        color_id: 9,
        product_id: 2,
      },
      {
        color_id: 7,
        product_id: 2,
      },
      {
        color_id: 10,
        product_id: 3,
      },
      {
        color_id: 10,
        product_id: 4,
      },
      {
        color_id: 7,
        product_id: 4,
      },
      {
        color_id: 8,
        product_id: 4,
      },
      {
        color_id: 10,
        product_id: 5,
      },
      {
        color_id: 7,
        product_id: 5,
      },
      {
        color_id: 8,
        product_id: 5,
      },
      {
        color_id: 2,
        product_id: 6,
      },
      {
        color_id: 6,
        product_id: 6,
      },
      {
        color_id: 1,
        product_id: 7,
      },
      {
        color_id: 10,
        product_id: 7,
      },
      {
        color_id: 7,
        product_id: 8,
      },
      {
        color_id: 8,
        product_id: 8,
      },
      {
        color_id: 10,
        product_id: 9,
      },
      {
        color_id: 8,
        product_id: 10,
      },
      {
        color_id: 7,
        product_id: 10,
      },
      {
        color_id: 7,
        product_id: 11,
      },
      {
        color_id: 9,
        product_id: 11,
      },
      {
        color_id: 4,
        product_id: 12,
      },
      {
        color_id: 2,
        product_id: 12,
      },
      {
        color_id: 5,
        product_id: 13,
      },
      {
        color_id: 6,
        product_id: 14,
      },
      {
        color_id: 4,
        product_id: 15,
      },
      {
        color_id: 11,
        product_id: 15,
      },
      {
        color_id: 11,
        product_id: 16,
      },
      {
        color_id: 7,
        product_id: 17,
      },
      {
        color_id: 8,
        product_id: 17,
      },
      {
        color_id: 9,
        product_id: 17,
      },
      {
        color_id: 7,
        product_id: 18,
      },
      {
        color_id: 8,
        product_id: 18,
      },
      {
        color_id: 9,
        product_id: 18,
      },
      {
        color_id: 7,
        product_id: 19,
      },
      {
        color_id: 8,
        product_id: 19,
      },
      {
        color_id: 9,
        product_id: 19,
      },
      {
        color_id: 3,
        product_id: 20,
      },
      {
        color_id: 7,
        product_id: 21,
      },
      {
        color_id: 8,
        product_id: 21,
      },
      {
        color_id: 9,
        product_id: 21,
      },
      {
        color_id: 6,
        product_id: 22,
      },
      {
        color_id: 2,
        product_id: 22,
      },
      {
        color_id: 9,
        product_id: 23,
      },
      {
        color_id: 7,
        product_id: 23,
      },
      {
        color_id: 9,
        product_id: 24,
      },
      {
        color_id: 7,
        product_id: 24,
      },
      {
        color_id: 2,
        product_id: 25,
      },
      {
        color_id: 5,
        product_id: 25,
      },
      {
        color_id: 6,
        product_id: 25,
      },
      {
        color_id: 2,
        product_id: 26,
      },
      {
        color_id: 5,
        product_id: 26,
      },
      {
        color_id: 6,
        product_id: 26,
      },
      {
        color_id: 1,
        product_id: 27,
      },
      {
        color_id: 10,
        product_id: 27,
      },
      {
        color_id: 7,
        product_id: 28,
      },
      {
        color_id: 8,
        product_id: 28,
      },
      {
        color_id: 9,
        product_id: 28,
      },
      {
        color_id: 7,
        product_id: 29,
      },
      {
        color_id: 8,
        product_id: 29,
      },
      {
        color_id: 9,
        product_id: 29,
      },
      {
        color_id: 3,
        product_id: 30,
      },
      {
        color_id: 7,
        product_id: 31,
      },
      {
        color_id: 8,
        product_id: 31,
      },
      {
        color_id: 9,
        product_id: 31,
      },
      {
        color_id: 7,
        product_id: 32,
      },
      {
        color_id: 8,
        product_id: 32,
      },
      {
        color_id: 9,
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

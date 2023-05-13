'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('image_products', [
      {
        image_id: 1,
        product_id: 1,
      },
      {
        image_id: 2,
        product_id: 1,
      },
      {
        image_id: 3,
        product_id: 1,
      },
      {
        image_id: 4,
        product_id: 2,
      },
      {
        image_id: 5,
        product_id: 2,
      },
      {
        image_id: 6,
        product_id: 2,
      },
      {
        image_id: 7,
        product_id: 3,
      },
      {
        image_id: 8,
        product_id: 3,
      },
      {
        image_id: 9,
        product_id: 3,
      },
      {
        image_id: 10,
        product_id: 4,
      },
      {
        image_id: 11,
        product_id: 4,
      },
      {
        image_id: 12,
        product_id: 4,
      },
      {
        image_id: 13,
        product_id: 5,
      },
      {
        image_id: 14,
        product_id: 5,
      },
      {
        image_id: 15,
        product_id: 5,
      },
      {
        image_id: 16,
        product_id: 6,
      },
      {
        image_id: 17,
        product_id: 6,
      },
      {
        image_id: 18,
        product_id: 6,
      },
      {
        image_id: 19,
        product_id: 7,
      },
      {
        image_id: 20,
        product_id: 7,
      },
      {
        image_id: 21,
        product_id: 7,
      },
      {
        image_id: 22,
        product_id: 8,
      },
      {
        image_id: 23,
        product_id: 8,
      },
      {
        image_id: 24,
        product_id: 8,
      },
      {
        image_id: 25,
        product_id: 9,
      },
      {
        image_id: 26,
        product_id: 9,
      },
      {
        image_id: 27,
        product_id: 9,
      },
      {
        image_id: 28,
        product_id: 10,
      },
      {
        image_id: 29,
        product_id: 10,
      },
      {
        image_id: 30,
        product_id: 10,
      },
      {
        image_id: 31,
        product_id: 10,
      },
      {
        image_id: 32,
        product_id: 11,
      },
      {
        image_id: 33,
        product_id: 11,
      },
      {
        image_id: 34,
        product_id: 11,
      },
      {
        image_id: 35,
        product_id: 12,
      },
      {
        image_id: 36,
        product_id: 12,
      },
      {
        image_id: 37,
        product_id: 12,
      },
      {
        image_id: 38,
        product_id: 12,
      },
      {
        image_id: 39,
        product_id: 13,
      },
      {
        image_id: 40,
        product_id: 13,
      },
      {
        image_id: 41,
        product_id: 13,
      },
      {
        image_id: 42,
        product_id: 14,
      },
      {
        image_id: 43,
        product_id: 14,
      },
      {
        image_id: 44,
        product_id: 14,
      },
      {
        image_id: 45,
        product_id: 15,
      },
      {
        image_id: 46,
        product_id: 15,
      },
      {
        image_id: 47,
        product_id: 15,
      },
      {
        image_id: 48,
        product_id: 16,
      },
      {
        image_id: 49,
        product_id: 16,
      },
      {
        image_id: 50,
        product_id: 16,
      },
      {
        image_id: 51,
        product_id: 17,
      },
      {
        image_id: 52,
        product_id: 17,
      },
      {
        image_id: 53,
        product_id: 17,
      },
      {
        image_id: 54,
        product_id: 18,
      },
      {
        image_id: 55,
        product_id: 18,
      },
      {
        image_id: 56,
        product_id: 18,
      },
      {
        image_id: 57,
        product_id: 19,
      },
      {
        image_id: 58,
        product_id: 19,
      },
      {
        image_id: 59,
        product_id: 19,
      },
      {
        image_id: 60,
        product_id: 20,
      },
      {
        image_id: 61,
        product_id: 20,
      },
      {
        image_id: 62,
        product_id: 21,
      },
      {
        image_id: 63,
        product_id: 21,
      },
      {
        image_id: 64,
        product_id: 22,
      },
      {
        image_id: 65,
        product_id: 22,
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

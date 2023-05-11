'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('products', [
      {
        name: '',//1
        care: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem dolorum! Eius veniam maiores accusamus adipisci eligendi, architecto ab quidem molestiae provident dolorem tempore, laboriosam totam velit! Consequuntur, ipsa ex?',
        price: 2000,
        offer: 0,
        stock: 10,
        category_id: 1
      }
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

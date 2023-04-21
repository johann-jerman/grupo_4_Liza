'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('users', [
      {
        name: 'johann',
        lastname: 'jerman',
        password: '$2b$10$fPhbLYjxkIVHEZEW1azXJOxVBJcnDyphyuETlUgKg/w3KUksxgiUi',
        email:  'johann@gmail.com',
        image:  'usuarioDefault.png',
        user_category_id: 1
      },
      {
        name: 'johann',
        lastname: 'jerman',
        password: '$2b$10$fPhbLYjxkIVHEZEW1azXJOxVBJcnDyphyuETlUgKg/w3KUksxgiUi',
        email:  'admin@gmail.com',
        image:  'usuarioDefault.png',
        user_category_id: 2
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

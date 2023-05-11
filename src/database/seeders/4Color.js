'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('colors', [
      {
        color: 'azul'
      },
      {
        color: 'rojo'
      },
      {
        color: 'verde'
      },
      {
        color: 'naranja'
      },
      {
        color: 'violata'
      },
      {
        color: 'rosa'
      },
      {
        color: 'gris'
      },
      {
        color: 'negro'
      },
      {
        color: 'blanco'
      },
      {
        color: 'celeste'
      },
      {
        color: 'ocre'
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

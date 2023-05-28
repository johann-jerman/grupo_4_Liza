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
        color: 'azul'//1
      },
      {
        color: 'rojo'//2
      },
      {
        color: 'verde'//3
      },
      {
        color: 'naranja'//4
      },
      {
        color: 'violeta'//5
      },
      {
        color: 'rosa'//6
      },
      {
        color: 'gris'//7
      },
      {
        color: 'negro'//8
      },
      {
        color: 'blanco'//9
      },
      {
        color: 'celeste'//10
      },
      {
        color: 'ocre'//11
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

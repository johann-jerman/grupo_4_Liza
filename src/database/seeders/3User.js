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
        // image:  'johann.jpeg',
        image:  'usuarioDefault.png',
        user_category_id: 1
      },
      {
        name: 'johann',
        lastname: 'jerman',
        password: '$2b$10$fPhbLYjxkIVHEZEW1azXJOxVBJcnDyphyuETlUgKg/w3KUksxgiUi',
        email:  'johannadmin@gmail.com',
        // image:  'johann.jpeg',
        image:  'usuarioDefault.png',
        user_category_id: 2
      },
      {
        name: 'Romina',
        lastname: 'Jaime',
        password: '$2b$10$fPhbLYjxkIVHEZEW1azXJOxVBJcnDyphyuETlUgKg/w3KUksxgiUi',
        email:  'jaime.r@gnail.com',
        // image:  'romi.jpg',
        image:  'usuarioDefault.png',
        user_category_id: 2
      },
      {
        name: 'Romina',
        lastname: 'Jaime',
        password: '$2b$10$fPhbLYjxkIVHEZEW1azXJOxVBJcnDyphyuETlUgKg/w3KUksxgiUi',
        email:  'romina.j@gmail.com',
        // image:  'romi.jpg',
        image:  'usuarioDefault.png',
        user_category_id: 1
      },
      {
        name: 'Josefina',
        lastname: 'Cisternas',
        password: '$2b$10$fPhbLYjxkIVHEZEW1azXJOxVBJcnDyphyuETlUgKg/w3KUksxgiUi',
        email:  'jose.c@gmail.com',
        // image:  'jose.jpg',
        image:  'usuarioDefault.png',
        user_category_id: 2
      },
      {
        name: 'Josefina',
        lastname: 'Cisternas',
        password: '$2b$10$fPhbLYjxkIVHEZEW1azXJOxVBJcnDyphyuETlUgKg/w3KUksxgiUi',
        email:  'josefina.c@gmail.com',
        // image:  'jose.jpg',
        image:  'usuarioDefault.png',
        user_category_id: 1
      },
      {
        name: 'Stip',
        lastname: 'de la Rua',
        password: '$2b$10$fPhbLYjxkIVHEZEW1azXJOxVBJcnDyphyuETlUgKg/w3KUksxgiUi',
        email:  'Stipideses@chilito.com',
        image:  'usuarioDefault.png',
        user_category_id: 2
      },
      {
        name: 'Stip',
        lastname: 'de la Rua',
        password: '$2b$10$fPhbLYjxkIVHEZEW1azXJOxVBJcnDyphyuETlUgKg/w3KUksxgiUi',
        email:  'Stipideses@yahoo.es',
        image:  'usuarioDefault.png',
        user_category_id: 1
      },
      {
        name: 'Micaela',
        lastname: 'Duque',
        password: '$2b$10$fPhbLYjxkIVHEZEW1azXJOxVBJcnDyphyuETlUgKg/w3KUksxgiUi',
        email:  'micaeladuq2@gmail.com',
        image:  'usuarioDefault.png',
        user_category_id: 2
      },
      {
        name: 'Micaela',
        lastname: 'Duque',
        password: '$2b$10$fPhbLYjxkIVHEZEW1azXJOxVBJcnDyphyuETlUgKg/w3KUksxgiUi',
        email:  'micaeladuq@gmail.com',
        image:  'usuarioDefault.png',
        user_category_id: 1
      },
      {
        name: 'Tincho',
        lastname: 'El Jefe',
        password: '$2b$10$fPhbLYjxkIVHEZEW1azXJOxVBJcnDyphyuETlUgKg/w3KUksxgiUi',
        email:  'eljefe@gmail.com',
        // image:  'jefe.jpg',
        image:  'usuarioDefault.png',
        user_category_id: 2
      },
      {
        name: 'Rocio',
        lastname: 'Anahi Alvarez',
        password: '$2b$10$fPhbLYjxkIVHEZEW1azXJOxVBJcnDyphyuETlUgKg/w3KUksxgiUi',
        email:  'ro@gmail.com',
        // image:  'ro.jpg',
        image:  'usuarioDefault.png',
        user_category_id: 1
      },
      {
        name: 'Mati',
        lastname: 'Chaves',
        password: '$2b$10$fPhbLYjxkIVHEZEW1azXJOxVBJcnDyphyuETlUgKg/w3KUksxgiUi',
        email:  'mati@gmail.com',
        // image:  'mati.jpg',
        image:  'usuarioDefault.png',

        user_category_id: 1
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

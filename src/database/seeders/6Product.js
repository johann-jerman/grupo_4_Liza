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
        name: 'Remera rosa para mujer',//1
        care: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem dolorum! Eius veniam maiores accusamus adipisci eligendi, architecto ab quidem molestiae provident dolorem tempore, laboriosam totam velit! Consequuntur, ipsa ex?',
        price: 5000,
        offer: 5,
        stock: 10,
        category_id: 2
      },
      {
        name: 'Remera blanca para mujer',//2
        care: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem dolorum! Eius veniam maiores accusamus adipisci eligendi, architecto ab quidem molestiae provident dolorem tempore, laboriosam totam velit! Consequuntur, ipsa ex?',
        price: 5000,
        offer: 25,
        stock: 10,
        category_id: 2
      },
      {
        name: 'Remera Celeste para mujer',//3
        care: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem dolorum! Eius veniam maiores accusamus adipisci eligendi, architecto ab quidem molestiae provident dolorem tempore, laboriosam totam velit! Consequuntur, ipsa ex?',
        price: 5000,
        offer: 25,
        stock: 10,
        category_id: 2
      },
      {
        name: 'Remera Negra para mujer',//4
        care: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem dolorum! Eius veniam maiores accusamus adipisci eligendi, architecto ab quidem molestiae provident dolorem tempore, laboriosam totam velit! Consequuntur, ipsa ex?',
        price: 5000,
        offer: 25,
        stock: 10,
        category_id: 2
      },
      {
        name: 'Remera Gris para mujer',//5
        care: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem dolorum! Eius veniam maiores accusamus adipisci eligendi, architecto ab quidem molestiae provident dolorem tempore, laboriosam totam velit! Consequuntur, ipsa ex?',
        price: 5000,
        offer: 25,
        stock: 10,
        category_id: 2
      },
      {
        name: 'Buso Deportivo para mujer',//6
        care: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem dolorum! Eius veniam maiores accusamus adipisci eligendi, architecto ab quidem molestiae provident dolorem tempore, laboriosam totam velit! Consequuntur, ipsa ex?',
        price: 5000,
        offer: 25,
        stock: 10,
        category_id: 2
      },
      {
        name: 'Buso Deportivo para mujer',//7
        care: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem dolorum! Eius veniam maiores accusamus adipisci eligendi, architecto ab quidem molestiae provident dolorem tempore, laboriosam totam velit! Consequuntur, ipsa ex?',
        price: 5000,
        offer: 25,
        stock: 10,
        category_id: 2
      },
      {
        name: 'Buso Deportivo para mujer',//8
        care: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem dolorum! Eius veniam maiores accusamus adipisci eligendi, architecto ab quidem molestiae provident dolorem tempore, laboriosam totam velit! Consequuntur, ipsa ex?',
        price: 5000,
        offer: 25,
        stock: 10,
        category_id: 2
      },
      {
        name: 'Buso Deportivo para mujer',//9
        care: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem dolorum! Eius veniam maiores accusamus adipisci eligendi, architecto ab quidem molestiae provident dolorem tempore, laboriosam totam velit! Consequuntur, ipsa ex?',
        price: 5000,
        offer: 25,
        stock: 10,
        category_id: 2
      },
      {
        name: 'Buso Deportivo para mujer',//10
        care: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem dolorum! Eius veniam maiores accusamus adipisci eligendi, architecto ab quidem molestiae provident dolorem tempore, laboriosam totam velit! Consequuntur, ipsa ex?',
        price: 5000,
        offer: 25,
        stock: 10,
        category_id: 2
      },
      {
        name: 'Buso Deportivo para mujer',//11
        care: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem dolorum! Eius veniam maiores accusamus adipisci eligendi, architecto ab quidem molestiae provident dolorem tempore, laboriosam totam velit! Consequuntur, ipsa ex?',
        price: 5000,
        offer: 25,
        stock: 10,
        category_id: 2
      },
      {
        name: 'Buso Deportivo para mujer',//12
        care: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem dolorum! Eius veniam maiores accusamus adipisci eligendi, architecto ab quidem molestiae provident dolorem tempore, laboriosam totam velit! Consequuntur, ipsa ex?',
        price: 5000,
        offer: 25,
        stock: 10,
        category_id: 2
      },
      {
        name: 'Pantalon Deportivo para mujer',//13
        care: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem dolorum! Eius veniam maiores accusamus adipisci eligendi, architecto ab quidem molestiae provident dolorem tempore, laboriosam totam velit! Consequuntur, ipsa ex?',
        price: 5000,
        offer: 25,
        stock: 10,
        category_id: 2
      },
      {
        name: 'Pantalon Deportivo para mujer',//14
        care: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem dolorum! Eius veniam maiores accusamus adipisci eligendi, architecto ab quidem molestiae provident dolorem tempore, laboriosam totam velit! Consequuntur, ipsa ex?',
        price: 5000,
        offer: 25,
        stock: 10,
        category_id: 2
      },
      {
        name: 'Pantalon Deportivo para mujer',//15
        care: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem dolorum! Eius veniam maiores accusamus adipisci eligendi, architecto ab quidem molestiae provident dolorem tempore, laboriosam totam velit! Consequuntur, ipsa ex?',
        price: 5000,
        offer: 25,
        stock: 10,
        category_id: 2
      },
      {
        name: 'Pantalon Deportivo para mujer',//16
        care: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem dolorum! Eius veniam maiores accusamus adipisci eligendi, architecto ab quidem molestiae provident dolorem tempore, laboriosam totam velit! Consequuntur, ipsa ex?',
        price: 5000,
        offer: 25,
        stock: 10,
        category_id: 2
      },
      {
        name: 'Pantalon Deportivo para mujer',//17
        care: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem dolorum! Eius veniam maiores accusamus adipisci eligendi, architecto ab quidem molestiae provident dolorem tempore, laboriosam totam velit! Consequuntur, ipsa ex?',
        price: 5000,
        offer: 25,
        stock: 10,
        category_id: 2
      },
      {
        name: 'Pantalon Deportivo para mujer',//18
        care: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem dolorum! Eius veniam maiores accusamus adipisci eligendi, architecto ab quidem molestiae provident dolorem tempore, laboriosam totam velit! Consequuntur, ipsa ex?',
        price: 5000,
        offer: 25,
        stock: 10,
        category_id: 2
      },
      {
        name: 'Campera Deportiva para mujer',//19
        care: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem dolorum! Eius veniam maiores accusamus adipisci eligendi, architecto ab quidem molestiae provident dolorem tempore, laboriosam totam velit! Consequuntur, ipsa ex?',
        price: 5000,
        offer: 25,
        stock: 10,
        category_id: 2
      },
      {
        name: 'Campera Deportiva para mujer',//20
        care: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem dolorum! Eius veniam maiores accusamus adipisci eligendi, architecto ab quidem molestiae provident dolorem tempore, laboriosam totam velit! Consequuntur, ipsa ex?',
        price: 5000,
        offer: 25,
        stock: 10,
        category_id: 2
      },
      {
        name: 'Campera Deportiva para mujer',//21
        care: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem dolorum! Eius veniam maiores accusamus adipisci eligendi, architecto ab quidem molestiae provident dolorem tempore, laboriosam totam velit! Consequuntur, ipsa ex?',
        price: 5000,
        offer: 25,
        stock: 10,
        category_id: 2
      },
      {
        name: 'Campera Deportiva para mujer',//22
        care: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem dolorum! Eius veniam maiores accusamus adipisci eligendi, architecto ab quidem molestiae provident dolorem tempore, laboriosam totam velit! Consequuntur, ipsa ex?',
        price: 5000,
        offer: 25,
        stock: 10,
        category_id: 2
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

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('images', [
      {
        image: '1.1.RemeraRosa.jpg'//1
      },
      {
        image: '1.2.RemeraRosa.jpg'//2
      },
      {
        image: '1.3.RemeraRosa.jpg'//3
      },
      {
        image: '1.4.RemeraBlanca.jpg'//4
      },
      {
        image: '1.5.RemeraBlanca.jpg'//5
      },
      {
        image: '1.6.RemeraBlanca.jpg'//6
      },
      {
        image: '1.7.RemeraCeleste.jpg'//7
      },
      {
        image: '1.8.RemeraCeleste.jpg'//8
      },
      {
        image: '1.9.RemeraCeleste.jpg'//9
      },
      {
        image: '1.10.RemeraNegra.jpg'//10
      },
      {
        image: '1.11.RemeraNegra.jpg'//11
      },
      {
        image: '1.12.RemeraNegra.jpg'//12
      },
      {
        image: '1.13.RemeraGris.jpg'//13
      },
      {
        image: '1.14.RemeraGris.jpg'//14
      },
      {
        image: '1.15.RemeraGris.jpg'//15
      },
      {
        image: '2.1.BuzoDeportivoRosa.jpg'//16
      },
      {
        image: '2.2.BuzoDeportivoRosa.jpg'//17
      },
      {
        image: '2.3.BuzoDeportivoRosa.jpg'//18
      },
      {
        image: '2.4.BuzoDeportivoCeleste.jpg'//19
      },
      {
        image: '2.5.BuzoDeportivoCeleste.jpg'//20
      },
      {
        image: '2.6.BuzoDeportivoCeleste.jpg'//21
      },
      {
        image: '2.10.BuzoDeportivoGris.jpg'//22
      },
      {
        image: '2.11.BuzoDeportivoGris.jpg'//23
      },
      {
        image: '2.12.BuzoDeportivoGris.jpg'//24
      },
      {
        image: '2.13.BuzoDeportivoCeleste.jpg'//25
      },
      {
        image: '2.14.BuzoDeportivoCeleste.jpg'//26
      },
      {
        image: '2.15.BuzoDeportivoCeleste.jpg'//27
      },
      {
        image: '2.16.BuzoDeportivoNegro.jpg'//28
      },
      {
        image: '2.17.BuzoDeportivoNegro.jpg'//29
      },
      {
        image: '2.18.BuzoDeportivoNegro.jpg'//30
      },
      {
        image: '2.19.BuzoDeportivoNegro.jpg'//31
      },
      {
        image: '2.20.BuzoDeportivoBlanco.jpg'//32
      },
      {
        image: '2.21.BuzoDeportivoBlanco.jpg'//33
      },
      {
        image: '2.22.BuzoDeportivoBlanco.jpg'//34
      },
      {
        image: '2.23.BuzoDeportivoNaranja.jpg'//35
      },
      {
        image: '2.24.BuzoDeportivoNaranja.jpg'//36
      },
      {
        image: '2.25.BuzoDeportivoNaranja.jpg'//37
      },
      {
        image: '2.26.BuzoDeportivoNaranja.jpg'//38
      },

      {
        image: '3.1.PantDeportivoLila.webp'//39
      },
      {
        image: '3.2.PantDeportivoLila.webp'//40
      },
      {
        image: '3.3.PantDeportivoLila.webp'//41
      },
      {
        image: '3.4.PantDeportivoRosa.webp'//42
      },
      {
        image: '3.5.PantDeportivoRosa.webp'//43
      },
      {
        image: '3.6.PantDeportivoRosa.webp'//44
      },
      {
        image: '3.8.PantDeportivoNaranja.jpg'//45
      },
      {
        image: '3.9.PantDeportivoNaranja.jpg'//46
      },
      {
        image: '3.10.PantDeportivoNaranja.jpg'//47
      },
      {
        image: '3.11.PantDeportivoMarron.jpg'//48
      },
      {
        image: '3.12.PantDeportivoMarron.jpg'//49
      },
      {
        image: '3.13.PantDeportivoMarron.jpg'//50
      },
      {
        image: '3.14.PantDeportivoGris.jpg'//51
      },
      {
        image: '3.15.PantDeportivoGris.jpg'//52
      },
      {
        image: '3.16.PantDeportivoGris.jpg'//53
      },
      {
        image: '3.20.PantDeportivoNegro.jpg'//54
      },
      {
        image: '3.21.PantDeportivoNegro.jpg'//55
      },
      {
        image: '3.22.PantDeportivoNegro.jpg'//56
      },
      {
        image: '4.1.CamperaDepNegra.jpg'//57
      },
      {
        image: '4.2.CamperaDepNegra.jpeg'//58
      },
      {
        image: '4.3.CamperaDepNegra.jpeg'//59
      },
      {
        image: '4.6.CamperaDepVerde.jpeg'//60
      },
      {
        image: '4.7.CamperaDepVerde.jpeg'//61
      },
      {
        image: '4.8.CamperaDepNegra.jpeg'//62
      },
      {
        image: '4.9.CamperaDepNegra.jpeg'//63
      },
      {
        image: '4.10.CamperaDepRoja.jpeg'//64
      },
      {
        image: '4.11.CamperaDepRoja.jpeg'//65
      },

      {
        image: '1.1.RemeraHombBlanca.jpg'//66
      },
      {
        image: '1.2.RemeraHombBlanca.jpg'//67
      },
      {
        image: '1.3.RemeraHombBlanca.jpg'//68
      },
      {
        image: '1.4.RemeraHombGris.jpg'//69
      },
      {
        image: '1.5.RemeraHombGris.jpg'//70
      },
      {
        image: '1.6.RemeraHombGris.jpg'//71
      },
      {
        image: '1.7.RemeraHombRosa.jpg'//72
      },
      {
        image: '1.8.RemeraHombRosa.jpg'//73
      },
      {
        image: '1.9.RemeraHombBordo.jpg'//74
      },
      {
        image: '1.10.RemeraHombBordo.jpg'//75
      },
      {
        image: '1.11.RemeraHombBordo.jpg'//76
      },
      {
        image: '3.4.CamperaDepAzul.jpg'//77
      },
      {
        image: '3.5.CamperaDepAzul.jpg'//78
      },
      {
        image: '3.6.CamperaDepAzul.jpg'//79
      },
      {
        image: '3.7.CamperaDepVizon.jpg'//80
      },
      {
        image: '3.8.CamperaDepVizon.jpg'//81
      },
      {
        image: '3.10.CamperaDepNegra.jpg'//82
      },
      {
        image: '3.11.CamperaDepNegra.jpg'//83
      },
      {
        image: '3.12.CamperaDepNegra.jpg'//84
      },

      {
        image: '4.1.PantalonDepVerde.jpg'//85
      },
      {
        image: '4.2.PantalonDepVerde.jpg'//86
      },
      {
        image: '4.3.PantalonDepVerde.jpg'//87
      },
      {
        image: '4.4.PantalonDepNegro.jpg'//88
      },
      {
        image: '4.5.PantalonDepNegro.jpg'//89
      },
      {
        image: '4.6.PantalonDepNegro.jpg'//90
      },
      {
        image: '4.7.PantalonDepGris.jpg'//91
      },
      {
        image: '4.8.PantalonDepGris.jpg'//92
      },
      {
        image: '4.9.PantalonDepGris.jpg'//93
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

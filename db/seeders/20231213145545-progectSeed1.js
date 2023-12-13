'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = [
      {
        name: 'Anton',
        email: 'rokunets@mail.ru',
        password: '1234'
      },
      {
        name: 'Alisher',
        email: 'alisher@mail.ru',
        password: '1234'
      }
    ];
    const albums = [
      {
        title: 'Moя Семья',
        status: false
      },
      {
        title: 'Мои Путешествия',
        status: false
      },
      {
        title: 'Моя Работа',
        status: false
      },
      {
        title: 'Моя машина',
        status: true
      },
    ]
    const pictures = [
      {
        url: 'https://citatnica.ru/wp-content/uploads/2021/01/1-1.jpeg',
        album_id: 1
      },
      {
        url: 'https://ezoterkin.ru/wp-content/uploads/2022/09/goroskop-dlya-zodiaka-strelec-2-1.jpg',
        album_id: 1
      },
      {
        url: 'https://i.ytimg.com/vi/bweTz0e94js/maxresdefault_live.jpg',
        album_id: 2
      },
      {
        url: 'https://ptzgovorit.ru/sites/default/files/original_nodes/travel-ppcorn-1.jpg',
        album_id: 2
      },
      {
        url: 'https://cdnstatic.rg.ru/uploads/images/gallery/29d3ffe6/7_d73c9905.jpg',
        album_id: 3
      },
      {
        url: 'https://img.psiheya-market.ru/upload/storage/user-1852/centr-moya-karera.jpg',
        album_id: 3
      },
      {
        url: 'https://sferijiznivm.ru/wp-content/uploads/2021/06/9-5.jpg',
        album_id: 4
      },
      {
        url: 'https://a.d-cd.net/oKAAAgPdRuA-1920.jpg',
        album_id: 4
      },
    
    ]
    const userAlbums = [
      {
        user_id: 1,
        album_id: 1
      },
      {
        user_id: 1,
        album_id: 2
      },
      {
        user_id: 2,
        album_id: 3
      },
      {
        user_id: 2,
        album_id: 4
      },
    ]
    
    const comments = [
      {
        user_id: 1,
        picture_id: 2,
        comment: 'Классное фото'
      },
      {
        user_id: 2,
        picture_id: 1,
        comment: 'Хотел бы как ты жить...'
      },
    ]
    
    await queryInterface.bulkInsert('Users', users, {});
    await queryInterface.bulkInsert('Albums', albums, {});
    await queryInterface.bulkInsert('Pictures', pictures, {});
    await queryInterface.bulkInsert('UserAlbums', userAlbums, {});
    await queryInterface.bulkInsert('Comments', comments, {});
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserAlbums', null, {});
    await queryInterface.bulkDelete('Comments', null, {});
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Albums', null, {});
    await queryInterface.bulkDelete('Pictures', null, {});
    
  }
};

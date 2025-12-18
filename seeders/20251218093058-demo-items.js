'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Ini data angka yang saya buatkan untukmu
    await queryInterface.bulkInsert('Items', [
      {
        nama: 'Laptop Gaming ASUS',
        stok: 50,
        terjual: 10, // Masih aman
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Mouse Wireless Logitech',
        stok: 100,
        terjual: 95, // Hampir habis (Warning!)
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Keyboard Mechanical',
        stok: 30,
        terjual: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Monitor Samsung 24 inch',
        stok: 20,
        terjual: 18, // Kritis!
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {});
  }
};
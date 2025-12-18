const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/ItemController');

// Halaman Utama
router.get('/', ItemController.listItems);

// Tambah Barang
router.get('/add', ItemController.addForm);
router.post('/add', ItemController.createItem);

// Hapus Barang (Sesuai ID)
router.get('/delete/:id', ItemController.deleteItem);

// Edit Barang (Sesuai ID)
router.get('/edit/:id', ItemController.editForm);
router.post('/edit/:id', ItemController.updateItem);

module.exports = router;
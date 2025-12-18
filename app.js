const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/index');
const expressLayouts = require('express-ejs-layouts'); // 1. Panggil Library

// Setting Tampilan ke EJS
app.set('view engine', 'ejs');

// 2. Gunakan Layout
app.use(expressLayouts);
app.set('layout', 'layout'); // Artinya file induknya bernama layout.ejs

// Agar bisa baca inputan form
app.use(express.urlencoded({ extended: true }));

// Pakai Rute yang kita buat
app.use('/', router);

app.listen(port, () => {
  console.log(`Aplikasi jalan di: http://localhost:${port}`);
});
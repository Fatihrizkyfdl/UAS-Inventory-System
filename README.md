# Sistem Monitoring & Prediksi Stok Gudang (Inventory System)

Aplikasi ini adalah sistem manajemen stok barang berbasis web yang dilengkapi dengan fitur prediksi otomatis status barang (Aman, Menipis, Kritis, Habis) menggunakan indikator warna visual.

Dibuat untuk memenuhi Tugas Besar / UAS Mata Kuliah Logika Pemrograman.

## 📋 Fitur Utama
- **CRUD Barang:** Tambah, Baca, Edit, dan Hapus data barang.
- **Relasi Kategori:** Pengelompokan barang berdasarkan kategori (Elektronik, Furniture, dll).
- **Algoritma Prediksi Stok:**
  - 🟢 **AMAN:** Stok ≥ 10
  - 🟡 **MENIPIS:** 5 ≤ Stok < 10
  - 🟠 **KRITIS:** 0 < Stok < 5
  - 🔴 **HABIS:** Stok = 0

## 🛠️ Teknologi
- **Backend:** Node.js & Express.js
- **Database:** MySQL & Sequelize ORM
- **Frontend:** EJS Templating Engine

---

## ⚙️ Cara Instalasi (Installation)

1. **Clone Repository ini**
   ```bash
   git clone [https://github.com/USERNAME_KAMU/UAS-Inventory-System.git](https://github.com/USERNAME_KAMU/UAS-Inventory-System.git)

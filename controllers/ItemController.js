const { Item } = require('../models');

class ItemController {
  
  static async listItems(req, res) {
    try {
      let items = await Item.findAll();
      
      let dataHasil = items.map(item => {
        let sisa = item.stok - item.terjual;
        let status = '';
        let warna = '';

        if (sisa <= 0) {
            status = 'HABIS';
            warna = 'red';
        } else if (sisa < 5) {
            status = 'KRITIS (Segera Restock)';
            warna = 'orange';
        } else if (sisa < 10) {
            status = 'MENIPIS';
            warna = 'yellow';
        } else {
            status = 'AMAN';
            warna = 'green';
        }

        return {
            id: item.id, 
            nama: item.nama,
            stok_awal: item.stok,
            terjual: item.terjual,
            sisa_stok: sisa,
            status_barang: status,
            warna_status: warna,
            kategori_id: item.kategori_id
        };
      });

      res.render('index', { dataHasil }); 
    } catch (error) {
      res.send(error.message);
    }
  }

  
  static async addForm(req, res) {
    res.render('add');
  }

  static async createItem(req, res) {
    const { nama, stok, terjual, kategori_id } = req.body;
    await Item.create({ nama, stok, terjual, kategori_id });
    
    res.redirect('/');
}

  
  static async deleteItem(req, res) {
    const id = req.params.id; 
    await Item.destroy({ where: { id: id } });
    res.redirect('/');
  }

  
  static async editForm(req, res) {
    const id = req.params.id;
    const item = await Item.findByPk(id); 
    res.render('edit', { item });
  }

  static async updateItem(req, res) {
    const id = req.params.id;
    
    
    const { nama, stok, terjual, kategori_id } = req.body; 
    
    
    await Item.update({ nama, stok, terjual, kategori_id }, { where: { id: id } });
    
    res.redirect('/');
}
}

module.exports = ItemController;
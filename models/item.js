module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    nama: {
      type: DataTypes.STRING,   
      allowNull: false
    },
    stok: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    terjual: {
      type: DataTypes.INTEGER,  
      allowNull: false
    },
    kategori_id: {
      type: DataTypes.INTEGER,  
      allowNull: true
    }
  }, {
    tableName: 'Items' 
  });

  return Item;
};
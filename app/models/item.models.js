module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define("items", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      isFlammable: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Item;
  };
  // varias duvidas sobre as informações a cima se e aqui q faço todo o banco de dados de produtos e clientes ?
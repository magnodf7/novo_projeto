module.exports = (sequelize, Sequelize) => {
    const Roupa = sequelize.define("roupas", {
      tipo: {
        type: Sequelize.STRING
      },
      tamanho: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      cor: { type: Sequelize.STRING
      },
      preco:{type: Sequelize.INTEGER
      }
       

      //isFlammable: {
        //type: Sequelize.BOOLEAN
      //}
    });
  
    return Roupa;
  };
  // varias duvidas sobre as informações a cima se e aqui q faço todo o banco de dados de produtos e clientes ?
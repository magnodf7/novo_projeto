module.exports = (sequelize, Sequelize) => {
  const Roupa = sequelize.define("roupas", {
    tipo: {
      type: Sequelize.STRING
    },
    tamanho: {
      type: Sequelize.STRING
    },
    quantidade: {
      type: Sequelize.INTEGER
    },
    cor: { type: Sequelize.STRING
    },
    preco:{type: Sequelize.FLOAT
    },
    empromocao: {
      type: Sequelize.BOOLEAN
    },
    id_cliente: {
      type: Sequelize.INTEGER,
      references: {
        model: "clientes",
        key: "id"
      }
    }
  });

  return Roupa;
};
// varias duvidas sobre as informações a cima se e aqui q faço todo o banco de dados de produtos e clientes ?
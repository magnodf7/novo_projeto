module.exports = (sequelize, Sequelize) => {
  const Cliente = sequelize.define("clientes", {
    nome: {
      type: Sequelize.STRING
    },
    tamanho: {
      type: Sequelize.STRING
    },
    telefone: {
      type: Sequelize.INTEGER
    },
    id_roupas: {
      type: Sequelize.INTEGER,
      references: {
        model: "roupas",
        key: "id"
      }
    }
  });

  return Cliente;
};
// varias duvidas sobre as informações a cima se e aqui q faço todo o banco de dados de produtos e clientes ?
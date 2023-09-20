// Importe as dependências do Sequelize e crie uma instância do Sequelize
const Sequelize = require('sequelize');
const sequelize = new Sequelize('nome_do_banco', 'nome_de_usuario', 'senha', {
  host: 'localhost',
  dialect: 'postgres', // ou o banco de dados que você está usando
});

// Defina os modelos das tabelas "roupas" e "cliente"
const Roupa = sequelize.define('roupas', {
  tipo: Sequelize.STRING,
  tamanho: Sequelize.STRING,
  // ... outras colunas da tabela roupas ...
});

const Cliente = sequelize.define('cliente', {
  nome: Sequelize.STRING,
  // ... outras colunas da tabela cliente ...
});

// Defina a associação "um para muitos" entre cliente e roupas
Cliente.hasMany(Roupa); // Um cliente pode ter muitas roupas

// Sincronize os modelos com o banco de dados
sequelize.sync()
  .then(() => {
    console.log('Tabelas criadas com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao criar tabelas:', err);
  });
// Importe as dependências do Sequelize e crie uma instância do Sequelize
const Sequelize = require('sequelize');
const sequelize = new Sequelize('nome_do_banco', 'nome_de_usuario', 'senha', {
  host: 'localhost',
  dialect: 'postgres', // ou o banco de dados que você está usando
});

// Defina os modelos das tabelas "roupas" e "cliente"
const Roupa = sequelize.define('roupas', {
  tipo: Sequelize.STRING,
  tamanho: Sequelize.STRING,
  // ... outras colunas da tabela roupas ...
});

const Cliente = sequelize.define('cliente', {
  nome: Sequelize.STRING,
  // ... outras colunas da tabela cliente ...
});

// Defina a associação "um para muitos" entre cliente e roupas
Cliente.hasMany(Roupa); // Um cliente pode ter muitas roupas

// Sincronize os modelos com o banco de dados
sequelize.sync()
  .then(() => {
    console.log('Tabelas criadas com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao criar tabelas:', err);
  });

const db = require("../models");
const Roupa = db.roupas;
//acho q e aqui q faco p comando de criar o banco dod clientes 
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.tipo) {
        res.status(400).send({
          message: "O conteúdo não pode ser vazio!"
        });
        return;
    }

    const roupas = {
        tipo: req.body.tipo,
        tamanho: req.body.tamanho,
        quantidade: req.body.quantidade,
        cor: req.body.cor,
        preco: req.body.preco,
        empromocao: req.body.empromocao ? req.body.empromocao : false
    };

    Roupa.create(roupas)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao tentar criar o item."
      });
    });
};

exports.findAll = (req, res) => {
    const tipo = req.query.tipo;
    var condition = tipo ? { tipo: { [Op.Like]: `%${tipo}%` } } : null;
  
    Roupa.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro ocorreu ao tentar pesquisar os itens."
        });
      });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Roupa.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Não foi possível encontrar o item com o id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Algum erro ocorreu ao tentar encontrar o item com o id=" + id
        });
      });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Roupa.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "O item foi atualizado."
          });
        } else {
          res.send({
            message: `Não foi possivel atualizar o item com o id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Algum erro ocorreu ao tentar atualizar o item com o id=" + id
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Roupa.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "O item foi apagado com sucesso."
          });
        } else {
          res.send({
            message: `Não foi possivel apagar o item com o id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Algum erro ocorreu ao tentar apagar o item com o id=" + id
        });
      });
};

exports.deleteAll = (req, res) => {
    Roupa.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Itens foram apagados com sucesso.` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Algum erro ocorreu ao tentar apagar todos os itens."
          });
        });
};

exports.findAllempromocao = (req, res) => {
    Roupa.findAll({ where: { empromocao: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao tentar pesquisar todos os itens inflamáveis."
      });
    });
};

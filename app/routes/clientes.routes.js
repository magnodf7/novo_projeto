module.exports = app => {
    const clientes = require("../controllers/clientes.controllers.js");
  
    var router = require("express").Router();
  
    router.post("/", clientes.create);
  
    router.get("/", clientes.findAll);
  
    router.get("/:id", clientes.findOne);

    router.get("/empromocao", clientes.findAllempromocao);
    
    router.put("/:id", clientes.update);
  
    router.delete("/:id", clientes.delete);
  
    router.delete("/", clientes.deleteAll);

    app.use('/api/clientes', router);
  };
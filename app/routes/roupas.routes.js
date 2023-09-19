module.exports = app => {
    const roupas = require("../controllers/roupas.controllers.js");
  
    var router = require("express").Router();
  
    router.post("/", roupas.create);
  
    router.get("/", roupas.findAll);
  
    router.get("/:id", roupas.findOne);

    router.get("/flammables", roupas.findAllempromocao);
    
    router.put("/:id", roupas.update);
  
    router.delete("/:id", roupas.delete);
  
    router.delete("/", roupas.deleteAll);

    app.use('/api/roupas', router);
  };
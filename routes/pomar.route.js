var express = require('express');
var router = express.Router();
const sql = require('../models/pomar.model')

router.post('/add',(req,res)=>{
  let dados = req.body.info;
  sql.addPomar(
    dados.apelido,
    dados.num_linha,
    dados.num_coluna
  ).then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    res.status(201).json(resposta);
  })
})
//Rota para busca todos os pomar
router.get('/buscaTodos',(req,res)=>{
  sql.buscaTodospomar().then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    res.status(200).json(resposta);
  })
})


module.exports = router;

var express = require('express');
var router = express.Router();
const sql = require('../models/colheita.model')
/* GET users listing. */
router.get('/colheita', function (req, res, next) {
  sql.getColheita().then((resposta) => {
    if (resposta instanceof Error) {

      res.status(500).send(resposta);
      return;
    }
    res.status(200).send(resposta)
  })
});

router.get('/colheita/:id', function (req, res, next) {
  sql.getColheitaById(req.params.id).then((resposta) => {
    if (resposta instanceof Error) {

      res.status(500).send(resposta);
      return;
    }
    res.status(200).send(resposta)
  })
});

router.get('/outro', function (req, res, next) {
  res.send('Escapei da Maldição');
});

router.post('/colheita',function(req,res){
  let info = req.body;
  sql.addColheita(info.dt_colheita,info.quantidade,info.arvore
).then((resposta)=>{
  if(resposta instanceof Error){
    res.status(500).json(resposta);
    return;
  }
  res.status(201).json(resposta);
  })
})


router.post('/add',(req,res)=>{
  let dados = req.body.info;
  sql.addColheita(
    dados.dt_colheita,
    dados.quantidade,
    dados.arvore
  ).then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    res.status(201).json(resposta);
  })
})
//Rota para busca todos os material
router.get('/buscaTodos',(req,res)=>{
  sql.buscaTodoscolheita().then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    res.status(200).json(resposta);
  })
})


module.exports = router;

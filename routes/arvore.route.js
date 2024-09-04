var express = require('express');
var router = express.Router();
const sql = require('../models/arvore.model')
/* GET users listing. */
router.get('/arvore', function (req, res, next) {
  sql.getArovore().then((resposta) => {
    if (resposta instanceof Error) {

      res.status(500).send(resposta);
      return;
    }
    res.status(200).send(resposta)
  })
});

router.get('/arvore/:id', function (req, res, next) {
  sql.getArovoreById(req.params.id).then((resposta) => {
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

router.post('/arvore',function(req,res){
  let info = req.body;
  sql.addArvore(info.defensivo,info.fertilizante,info.ultima_verificacao,info.tipo,info.situacao
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
  sql.addArvore(
    dados.defensivo,
    dados.fertilizante,
    dados.ultima_verificacao,
    dados.tipo,
    dados.situacao
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
  sql.buscaTodosarvore().then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    res.status(200).json(resposta);
  })
})


module.exports = router;

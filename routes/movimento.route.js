var express = require('express');
var router = express.Router();
const sql = require('../models/movimento.model')
/* GET users listing. */
router.get('/movimento', function (req, res, next) {
  sql.getMovimento().then((resposta) => {
    if (resposta instanceof Error) {

      res.status(500).send(resposta);
      return;
    }
    res.status(200).send(resposta)
  })
});

router.get('/movimento/:id', function (req, res, next) {
  sql.getMovimetoById(req.params.id).then((resposta) => {
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



router.post('/add',(req,res)=>{
  let dados = req.body.info;
  sql.addMovimento(
    dados.tipo,
    dados.produto,
    dados.quantidade
  ).then((resposta)=>{
    console.log(resposta)
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    res.status(201).json(resposta);
  })
})
//Rota para busca todos os material
router.get('/buscaTodos',(req,res)=>{
  sql.buscaTodosmovimento().then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    res.status(200).json(resposta);
  })
})


module.exports = router;

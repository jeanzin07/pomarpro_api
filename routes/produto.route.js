var express = require('express');
var router = express.Router();
const sql = require('../models/produto.model')
/* GET users listing. */
router.get('/produto', function (req, res, next) {
  sql.getProduto().then((resposta) => {
    if (resposta instanceof Error) {

      res.status(500).send(resposta);
      return;
    }
    res.status(200).send(resposta)
  })
});

router.get('/produto/:id', function (req, res, next) {
  sql.getProdutoById(req.params.id).then((resposta) => {
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

router.post('/produto',function(req,res){
  let info = req.body;
  sql.addProduto(info.acao,info.descricao,info.unid_medida,info.valor,info.tipo,
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
  sql.addProduto(
    dados.descricao,
    dados.unid_medida,
    dados.valor,
    dados.tipo
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
  sql.buscaTodosproduto().then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    res.status(200).json(resposta);
  })
})


module.exports = router;

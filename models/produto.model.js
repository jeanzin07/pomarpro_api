const conexao = require('../database/connection.database');


//Busca todos os material do banco de dados
async function getPorduto(){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_produtos
        `)
        return linhas;
    }catch(erro){
        return erro;
    }
}

//Busca todos os material do banco de dados
async function getProdutoById(id){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_produtos where id  = ?
        `,[id])
        return linhas;
    }catch(erro){
        return erro;
    }
}
//Busca os material pelo ID



//Insere um material no banco de dados 
async function addProduto(descricao,unid_medida,valor,tipo){
    try{
        const [exec] = await conexao.query(`
        insert into tb_produtos(
        descricao,unid_medida,valor,tb_tipo_id
        )values(
        ?,?,?,?
        )
        `,[descricao,unid_medida,valor,tipo])
        return exec.affectedRows;
    }catch(erro){
        return erro;
    }
}

  //Função para buscar todos os usuario de bancos
  async function buscaTodosproduto(){
    //Estrutura da tentativa try..catch para capturar erros
    try{
        //Abre a conexão e informa a query
        let [linha] = await conexao.query(`
            select 
                id
                descricao,
                unid_medida,
                valor
             
                from tb_produtos;
        `)
        //Retorna o erro que aconteceu
        return linha;
    }catch(e){
        return e;
  }
}
module.exports = {
    addProduto,
    buscaTodosproduto,
    getPorduto,
    getProdutoById
}   
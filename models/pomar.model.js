const conexao = require('../database/connection.database');


//Busca todos os material do banco de dados
async function getPomar(){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_pomar
        `)
        return linhas;
    }catch(erro){
        return erro;
    }
}

//Busca todos os material do banco de dados
async function getPomarById(id){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_pomar where id  = ?
        `,[id])
        return linhas;
    }catch(erro){
        return erro;
    }
}
//Busca os material pelo ID



//Insere um material no banco de dados 
async function addPomar(apelido,num_linha,num_coluna){
    try{
        const [exec] = await conexao.query(`
        insert into tb_pomar(
        apelido,num_linha,num_coluna
        )values(
        ?,?,?
        )
        `,[apelido,num_linha,num_coluna])
        return exec.affectedRows;
    }catch(erro){
        return erro;
    }
}

  //Função para buscar todos os usuario de bancos
  async function buscaTodospomar(){
    //Estrutura da tentativa try..catch para capturar erros
    try{
        //Abre a conexão e informa a query
        let [linha] = await conexao.query(`
            select 
                u.id,
                u.apelido,
                u.num_linha,
                u.num_coluna
             
                from tb_pomar u;
        `)
        //Retorna o erro que aconteceu
        return linha;
    }catch(e){
        return e;
  }
}
module.exports = {
    buscaTodospomar,
    addPomar
}   
const conexao = require('../database/connection.database');


//Busca todos os material do banco de dados
async function getColheita(){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_colheita
        `)
        return linhas;
    }catch(erro){
        return erro;
    }
}

//Busca todos os material do banco de dados
async function getColheitaById(id){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_colheita where id  = ?
        `,[id])
        return linhas;
    }catch(erro){
        return erro;
    }
}
//Busca os material pelo ID



//Insere um material no banco de dados 
async function addColheita(dt_colheita,quantidade,arvore){
    try{
        const [exec] = await conexao.query(`
        insert into tb_colheita(
        dt_colheita,quantidade,tb_arvore_id
        )values(
        ?,?,?
        )
        `,[dt_colheita,quantidade,arvore])
        return exec.affectedRows;
    }catch(erro){
        return erro;
    }
}

  //Função para buscar todos os usuario de bancos
  async function buscaTodoscolheita(){
    //Estrutura da tentativa try..catch para capturar erros
    try{
        //Abre a conexão e informa a query
        let [linha] = await conexao.query(`
            select 
                u.id,
                u.dt_colheita,
                u.quatidade,
                u.tb_arvore_id
             
                from tb_colheita u;
        `)
        //Retorna o erro que aconteceu
        return linha;
    }catch(e){
        return e;
  }
}
module.exports = {
    getColheita,
    getColheitaById,
    addColheita,
    buscaTodoscolheita
   
}   
const conexao = require('../database/connection.database');


//Busca todos os material do banco de dados
async function getMovimento(){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_mov_itm`)
        return linhas;
    }catch(erro){
        return erro;
    }
}

//Busca todos os material do banco de dados
async function getMovimentoById(id){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_mov_itm where id  = ?
        `,[id])
        return linhas;
    }catch(erro){
        return erro;
    }
}
//Busca os material pelo ID



//Insere um material no banco de dados 
async function addMovimento(tipo,produto,quantidade){
    try{
        const [exec] = await conexao.query(`
        insert into tb_movimentacao(
        tipo,
        dt_movimentancao
        )values(
        ?,
            current_timestamp
        )
        `,[tipo])
        const [linha] = await conexao.query(`
            select last_insert_id() as id;
            `)

            const [exec2] = await conexao.query(`
                insert into tb_mov_itm(
                quantidade, tb_produtos_id,tb_movimentacao_id)
                values(
                ?,?,?
                )
                `,[ quantidade,produto, linha[0].id])

        return exec2.affectedRows;
    }catch(erro){
        return erro;
    }
}

  //Função para buscar todos os usuario de bancos
  async function buscaTodosmovimento(){
    //Estrutura da tentativa try..catch para capturar erros
    try{
        //Abre a conexão e informa a query
        let [linha] = await conexao.query(`
            select 
                id,
                u.movimentacao,
                u.produto,
                quantidade
             
                from tb_mov_itm ;
        `)
        //Retorna o erro que aconteceu
        return linha;
    }catch(e){
        return e;
  }
}
module.exports = {
    addMovimento,
    buscaTodosmovimento,
    getMovimento,
    getMovimentoById
}   
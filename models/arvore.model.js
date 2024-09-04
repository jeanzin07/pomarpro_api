const conexao = require('../database/connection.database');


//Busca todos os material do banco de dados
async function getArovore(){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_arvore
        `)
        return linhas;
    }catch(erro){
        return erro;
    }
}

//Busca todos os material do banco de dados
async function getArvoreById(id){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_arvore where id  = ?
        `,[id])
        return linhas;
    }catch(erro){
        return erro;
    }
}
//Busca os material pelo ID



//Insere um material no banco de dados 
async function addArvore(defensivo,fertilizante,ultima_verificacao,linha,coluna,tipo,situacao,pomar){
    try{
        const [exec] = await conexao.query(`
        insert into tb_arvore(
        defensivo,fertilizante,ultima_verificacao,linha,coluna,tipo,situacao,pomar
        )values(
        ?,?,?,?,?
        )
        `,[defensivo,fertilizante,ultima_verificacao,linha,coluna,tipo,situacao,pomar])
        return exec.affectedRows;
    }catch(erro){
        return erro;
    }
}

  //Função para buscar todos os usuario de bancos
  async function buscaTodosArvore(){
    //Estrutura da tentativa try..catch para capturar erros
    try{
        //Abre a conexão e informa a query
        let [linha] = await conexao.query(`
            select 
                u.id,
                u.defensivo,
                u.fertilizante,
                u.ultima_verificacao,
                u.linha,
                u.coluna,
                u.tipo,
                u.situacao,
                u.pomar
             
                from tb_arvore u;
        `)
        //Retorna o erro que aconteceu
        return linha;
    }catch(e){
        return e;
  }
}
module.exports = {
    getArovore,
    getArvoreById,
    addArvore,
    buscaTodosArvore
}   
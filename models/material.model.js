const conexao = require('../database/connection.database');


//Busca todos os material do banco de dados
async function getMaterial(){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_material
        `)
        return linhas;
    }catch(erro){
        return erro;
    }
}

//Busca todos os material do banco de dados
async function getMaterialById(id){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_material where id  = ?
        `,[id])
        return linhas;
    }catch(erro){
        return erro;
    }
}
//Busca os material pelo ID



//Insere um material no banco de dados 
async function addMaterial(nome,valor,fornecedor){
    try{
        const [exec] = await conexao.query(`
        insert into tb_materias(
        nome,valor,fornecedor
        )values(
        ?,?,?
        )
        `,[nome,valor,fornecedor])
        return exec.affectedRows;
    }catch(erro){
        return erro;
    }
}

  //Função para buscar todos os usuario de bancos
  async function buscaTodosmaterial(){
    //Estrutura da tentativa try..catch para capturar erros
    try{
        //Abre a conexão e informa a query
        let [linha] = await conexao.query(`
            select 
                u.id,
                u.nome,
                u.valor,
                u.fornecedor
             
                from tb_materias u;
        `)
        //Retorna o erro que aconteceu
        return linha;
    }catch(e){
        return e;
  }
}
module.exports = {
    getMaterial,
    getMaterialById,
    addMaterial,
    buscaTodosmaterial
}   
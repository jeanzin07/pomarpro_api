const conexao = require('../database/connection.database');


//Busca todos os usuários do banco de dados
async function getUsuarios(){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_usuario
        `)
        return linhas;
    }catch(erro){
        return erro;
    }
}

//Busca todos os usuários do banco de dados
async function getUsuariosById(id){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_usuario where id  = ?
        `,[id])
        return linhas;
    }catch(erro){
        return erro;
    }
}
//Busca os usuários pelo ID



//Insere um usuário no banco de dados 
async function addUsuario(nome,sobrenome,endereco,telefone,email,login,senha){
    try{
        const [exec] = await conexao.query(`
        insert into tb_usuario(
        nome,sobrenome,endereco,telefone,email,login,senha
        )values(
        ?,?,?,?,?,?,?
        )
        `,[nome,sobrenome,endereco,telefone,email,login,senha])
        return exec.affectedRows;
    }catch(erro){
        return erro;
    }
}
async function autenticaUsuario(usuario,senha){
    try{
      let [linha] = await conexao.query(`
      select
      id
      from tb_usuario
      where 1=1
        and login = ?
        and senha = ?
        `,[usuario,senha])
        return linha;
      }catch(e){
        return e;
      }
  }
  //Função para buscar todos os usuario de bancos
  async function buscaTodosusuarios(){
    //Estrutura da tentativa try..catch para capturar erros
    try{
        //Abre a conexão e informa a query
        let [linha] = await conexao.query(`
            select 
                u.id,
                u.nome,
                u.sobrenome,
                u.telefone,
                u.email,
                u.login
                from tb_usuario u;
        `)
        //Retorna o erro que aconteceu
        return linha;
    }catch(e){
        return e;
  }
}
module.exports = {
    getUsuarios,
    getUsuariosById,
    addUsuario,
    autenticaUsuario,
    buscaTodosusuarios
}   
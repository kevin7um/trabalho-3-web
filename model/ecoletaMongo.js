const mongodb = require('mongodb');
const ClienteMongo = mongodb.MongoClient;
var cliente;

const conexao_db = async () => {
  if(!cliente){
    cliente = await ClienteMongo.connect("mongodb://localhost:27017");
  }
}

const database = () => {
  return cliente.db("ecoleta");
}

class EcoletaMongo {
  async busca(dados){
    await conexao_db();
    const colecao = database().collection("pontos");
    const pontos = await colecao.find({cidade: dados.cidade, estado: dados.estado}).toArray();

    return pontos;
  }

  async insere(dados){
    await conexao_db();
    const colecao = database().collection("pontos");
    await colecao.insertOne(dados)
  }

  async consulta(id){
    await conexao_db();
    const colecao = database().collection("pontos");
    const pontos = await colecao.findOne({_id: new mongodb.ObjectId(id)});

    return pontos;
  }

  async atualiza(dados){
    await conexao_db();
    const colecao = database().collection("pontos");
    await colecao.updateOne(
      {_id: new mongodb.ObjectId(dados._id)},
      {
        $set:{
          entidade: dados.entidade,
          endereco: dados.endereco,
          numero: dados.numero,
          cidade: dados.cidade,
          estado: dados.estado,
          itens: dados.itens
        },
      }
    );
  }

  async deleta(id){
    await conexao_db();
    const colecao = database().collection("pontos");
    const ponto = await colecao.findOne({_id: new mongodb.ObjectId(id)})
    if(!ponto){
      return "Esse registro não existe na base de dados";
    }
    else{
      await colecao.findOneAndDelete({_id: new mongodb.ObjectId(id)});
      return "Ponto de Coleta excluído com sucesso!"
    }
  }
}

module.exports = new EcoletaMongo();

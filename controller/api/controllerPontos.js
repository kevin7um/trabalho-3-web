const database = require("../../model/ecoletaMongo")

exports.busca = async function(req, res){
  const dados = req.body;

  const pontos = await database.busca(dados);
  
  res.json(pontos)
}

exports.cadastro = async function(req, res) {
  const entidade = req.body.entidade;
  const endereco = req.body.endereco;
  const numero = req.body.numero;
  const cidade = req.body.cidade;
  const estado = req.body.estado;
  const itens = req.body.itens;

  const dados = {
    entidade: entidade,
    endereco: endereco,
    numero: numero,
    cidade: cidade,
    estado: estado,
    itens: itens
  }

  await database.insere(dados);

  res.json({"msg": "Cliente Cadastrado com sucesso!"})
}

exports.consulta = async function(req, res){
  const id = req.params.id;

  const ponto = await database.consulta(id);

  res.json(ponto)
}

exports.atualiza = async function(req, res) {
  const id = req.params.id;

  const entidade = req.body.entidade;
  const endereco = req.body.endereco;
  const numero = req.body.numero;
  const cidade = req.body.cidade;
  const estado = req.body.estado;
  const itens = req.body.itens;

  const dados = {
    _id: id,
    entidade: entidade,
    endereco: endereco,
    numero: numero,
    cidade: cidade,
    estado: estado,
    itens: itens
  }

  await database.atualiza(dados);

  res.json({"msg": "Ponto de Coleta atualizado com sucesso!"})
}

exports.deleta = async function(req, res){
  const id = req.params.id;

  const retorno = await database.deleta(id);

  res.json({"msg": retorno})
}
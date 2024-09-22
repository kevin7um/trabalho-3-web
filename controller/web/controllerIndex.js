const express = require('express')
const app = express();

exports.home = function(req, res){
  const estados = [
    {uf: "Acre"},
    {uf: "Alagoas"},
    {uf: "Amapá"},
    {uf: "Amazonas"},
    {uf: "Bahia"},
    {uf: "Ceará"},
    {uf: "Distrito Federal"},
    {uf: "Espirito Santo"},
    {uf: "Goiás"},
    {uf: "Maranhão"},
    {uf: "Mato Grosso do Sul"},
    {uf: "Mato Grosso"},
    {uf: "Minas Gerais"},
    {uf: "Pará"},
    {uf: "Paraíba"},
    {uf: "Paraná"},
    {uf: "Pernambuco"},
    {uf: "Piauí"},
    {uf: "Rio de Janeiro"},
    {uf: "Rio Grande do Norte"},
    {uf: "Rio Grande do Sul"},
    {uf: "Rondônia"},
    {uf: "Roraima"},
    {uf: "Santa Catarina"},
    {uf: "São Paulo"},
    {uf: "Sergipe"},
    {uf: "Tocantins"},
  ];

  const contexto = {
    titulo: "Ecoleta - Home",
    estados: estados,
  }

  res.render('index', contexto);
}

exports.busca = function(req, res){

  const ponto = [
    {
      entidade: "Coletoria",
      endereco: "Avenida JK, Realeza",
      cidade: "Manhuaçu",
      estado: "Minas Gerais",
      numero: 150,
      itens: ["Resíduos Eletrônicos", "Lâmpadas"]
    },

    {
      entidade: "Papersider",
      endereco: "Rua da Matriz, Realeza",
      cidade: "Manhuaçu",
      estado: "Minas Gerais",
      numero: 100,
      itens: ["Papel", "Papelão"]
    },

  ]

  const contexto = {
    titulo: "Pontos de coletas encontrados",
    pontos: ponto,
    quantidade: ponto.length,
  }

  res.render('busca', contexto);
}

exports.busca_post = async function(req, res){
  // const dados = req.body;

  const dados = {
    cidade: req.body.cidade,
    estado: req.body.estado
  }

  const pontos = await fetch("http://10.0.0.153:3000/api/busca", {
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(dados)
  }).then(res => res.json())

  const contexto = {
    titulo: "Resultado de Busca",
    pontos: pontos,
    quantidade: pontos.length
  }

  res.render('busca', contexto)
}
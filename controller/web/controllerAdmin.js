

exports.cadastro_get = function(req, res){

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
    titulo: "Cadastro de Entidades",
    estados: estados
  };

  res.render('cadastro', contexto);
}

exports.cadastro_post = async function(req, res){
  const dados = req.body

  await fetch("http://10.0.0.153:3000/api/cadastro", {
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(dados)
  })

  res.redirect('index')
}
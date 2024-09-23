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

exports.painel = async function(req, res){

  const pontos = await fetch("http://localhost:3000/api")
  .then(res => res.json())

  const contexto = {
    titulo: "Painel Administrativo",
    pontos: pontos,
    link: "/"
  }

  res.render('painel', contexto)
}

exports.cadastro_get = function(req, res){

  const contexto = {
    titulo: "Cadastro de Entidades",
    estados: estados,
    link: "/admin"
  };

  res.render('cadastro', contexto);
}

exports.cadastro_post = async function(req, res){
  const dados = req.body

  await fetch("http://localhost:3000/api/cadastro", {
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(dados)
  })

  res.redirect('/admin')
}

exports.altera_get = async function(req, res){
  const id = req.params.id
  
  const ponto = await fetch(`http://localhost:3000/api/consulta/${id}`)
  .then(res => res.json())
  
  const contexto = {
    titulo: "Alterar dados do Ponto de Coleta",
    ponto: ponto,
    estados: estados,
    link: "/admin"
  }
  
  res.render('altera', contexto)
}

exports.altera_post = async function(req, res) {
  const id = req.params.id
  const dados = req.body;

  await fetch(`http://localhost:3000/api/altera/${id}`, {
    method: "PUT",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(dados)
  })

  res.redirect('/admin')
}

exports.deleta = async function(req, res) {
  const id = req.params.id

  await fetch(`http://localhost:3000/api/deleta/${id}`, {
    method: "DELETE"
  })

  res.redirect('/admin')
}
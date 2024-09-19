
exports.home = function(req, res){
  const contexto = {
    titulo: "Ecoleta - Home"
  }

  res.render('index', contexto);
}
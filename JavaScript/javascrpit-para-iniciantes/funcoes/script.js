function areaQuadrado(lado) {
  return lado * lado;
}

//console.log(areaQuadrado(2));

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7

//console.log(total)

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

//console.log(imc(80, 1.8));

function corFaorita(cor) {
  if(cor === 'azul') {
    return 'Eu gosto do céu';
  } else if (cor === 'verde'){
    return 'Eu gosto de mato';
  } else {
    return 'Eu não goso de cores'
  }
}

addEventListener('click', function(){
  //console.log('Clicou');
})


function terceiraIdade(idade) {
  //console.log(typeof idade)
  if(typeof idade !== 'number') {
    return 'Por favor preencha um número'
  }else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

//console.log(terceiraIdade(70))


function faltaVisitar(paiseVisitados) {
  var totalPaises = 193;
  return `Falta vísitar ${totalPaises - paiseVisitados} países`;
}



var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro

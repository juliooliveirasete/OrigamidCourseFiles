// Crie uma função para verificar se um valor é Truthy

function verificar(valor) {
  if(valor === true) {
    console.log('Esse valor é Truthy')
  } else {
    console.log('Esse valor não é Truthy')
  }
}

verificar(true)

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado) {
  console.log(lado * 4)
}

perimetro(2)

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeSobrenome(nome, sobrenome){
  console.log(nome + " " + sobrenome)
}

nomeSobrenome("Julio", "Oliveira")

// Crie uma função que verifica se um número é par

function verificarPar(numero) {
  if(numero % 2 == 0) {
    console.log('Número Par')
  } else {
    console.log('Número impar')
  }
}

verificarPar(3)

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(valor) {
  console.log(typeof valor)
}

tipoDado(true)

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

/* addEventListener("scroll", function(){
  alert("Julio Oliveira")
} ) */

// Corrija o erro abaixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));

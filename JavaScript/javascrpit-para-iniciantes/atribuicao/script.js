/* var numero = 20;
var numero2 = 10;

numero += numero2; // numero = numero + 10

console.log(numero);

// TERNARIO

var idade = 20;
var naoPussui = true;

var podeBeber;
podeBeber = (idade >= 18 && naoPussui) ? "pode beber" : "não pode beber";

console.log(podeBeber)

var possuiFaculdade = false;

if(possuiFaculdade) console.log('Sim, Possui');
else console.log('Não possui'); */

























// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;

scroll += 500;

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

if(possuiCarro && possuiCasa) {
  darCredito = true;
} else {
  darCredito = false;
}
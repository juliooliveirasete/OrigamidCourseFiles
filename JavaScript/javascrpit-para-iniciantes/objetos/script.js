// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var mlkLiso = {
  nome: "Julio",
  sobrenome: "Oliveira",
}

// Crie um método no objeto anterior, que mostre o seu nome completo

mlkLiso.nomeCompleto = function() {
  return this.nome + " " + this.sobrenome
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var dog = {
  raca: "labrador",
  cor: "preto",
  viuHomem(viu) {
    if(viu === true){
      return "latiu"
    } else {
      return "não latiu"
    }
  }
}



// TUDO É OBJETO

var nome = 'André';

var nomeMaiusculo = nome.toUpperCase();

var btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
  alert('Boaaaa')
})


// nomeie 3 propriedades ou métodos de strings

console.log(nome.length)
console.log(nome.toUpperCase())
console.log(nome.toLocaleLowerCase())

// nomeie 5 propriedades ou métodos de elementos do DOM



// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V






































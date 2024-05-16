/* const comida = 'Pizza';
const agua = new String('Agua');

const tamanhoCarac = comida.length;
const primeiraLetra = comida[0];

const menosUm = comida[tamanhoCarac - 1];

// str.charAt(m) - funciona como uma string

const linguagem = 'JavaScript';

linguagem.charAt(0);

const frase = 'A melhor linguagem é ';

const fraseLing = frase.concat(linguagem);

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta, 10))//true
console.log(fruta.startsWith('Ba')); //true
console.log(fruta.endsWith('nana')); //true

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3));
console.log(transacao2.slice(0, 3));
console.log(transacao3.slice(0, 3));

console.log(transacao1.slice(12));
console.log(transacao1.slice(-4));
console.log(transacao1.slice(3, 6));

console.log(linguagem.substring(3, 5))
console.log(linguagem.substring(0, 4))
console.log(linguagem.substring(4))

const instrumento = 'Guitarra';

console.log(instrumento.indexOf('r')); // Verifica aonde esta o caracter
console.log(instrumento.lastIndexOf('a')); // aonde esta o ultimo caracter
console.log(instrumento.lastIndexOf('a')); // aonde esta o ultimo caracter */

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach(preco => {
   // console.log(preco.padStart(10, ' '));
    //console.log(preco.padEnd(10, '.'));
});

listaPrecos[0].padStart(0, '.');

const frase = ' ta';

// console.log(frase.repeat(7))

let listaItems = 'Camisas Bonés Calças Bermudas Vestidos Saias'
listaItems = listaItems.replace(/[ ]+/g, ', '); // remove todos espaçoes e adiciona a virgula

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); //substitui o caracter que quero substituir

//

const ListaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias'
const arrayItens = ListaItens.split(' ');

const htmlText = '<div>O melhor item</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

const valor = ' RS 23.00 '


console.log(valor.trim());
console.log(valor.trimStart())
console.log(valor.trimEnd())


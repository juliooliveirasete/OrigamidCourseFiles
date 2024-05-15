const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;

const rect = primeiroh2.getBoundingClientRect();

const small = window.matchMedia('(max-width: 600px)');

if(small) {
  console.log('Usuário Mobile');
} else {
  console.log('Usuário Desktop')
}
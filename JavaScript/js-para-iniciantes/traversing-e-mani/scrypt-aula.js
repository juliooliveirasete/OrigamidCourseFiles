/* const h1 = document.querySelector('h1');

const animaisLista = document.querySelector('.animais-lista');

console.log(h1.innerText);

console.log(animaisLista.previousElementSibling);

console.log(animaisLista.nextElementSibling);

console.log(animaisLista.children[animaisLista.children.length - 1]);

console.log(animaisLista.querySelector('li:last-child'));

console.log(animaisLista.childNodes);

console.log(animaisLista.previousSibling); */

/* const lista = document.querySelector('.animais-lista');

const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

//animais.appendChild(titulo);

const mapa = document.querySelector('.mapa');

//contato.insertBefore(animais, mapa);

/* contato.removeChild(titulo);

contato.replaceChild(lista, mapa);

const novoh1 = document.createElement('h1')

novoh1.innerText = 'Novo Título';
novoh1.classList.add('Titulo')

//mapa.appendChild(novoh1)

const cloneTitulo = titulo.cloneNode(true) */

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneh1 = h1.cloneNode(true);

faq.appendChild(cloneh1)
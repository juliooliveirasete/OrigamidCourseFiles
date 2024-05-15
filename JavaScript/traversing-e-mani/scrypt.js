// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');

const cloneMenu = menu.cloneNode(true)

const copy = document.querySelector('.copy');

copy.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq

const faqLista = document.querySelector('.faq-lista')

const primeirodt = faqLista.querySelector('dt')

// Selecione o DD referente ao primeiro DT

const dddodt = primeirodt.parentElement;

// Substitua o conteúdo html de .faq pelo de .animais

const body = document.querySelector('body');

const animais = document.querySelector('.animais');

faqLista.innerHTML = animais.innerHTML;
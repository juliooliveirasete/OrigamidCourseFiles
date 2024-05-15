// window.alert("Isso aí");

//const href = window.location.href;

//console.log(href);

/* const titulo = document.querySelector('h1');

const h1Classes = titulo.classList;

titulo.addEventListener('click', function(){
  console.log('Clicou em ', titulo.innerText)
}) */







// Retorne o url da página atual utilizando o objeto window

const urlLocal = window.location.href;

console.log('O URL é', urlLocal)

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const primeiroAtivo = document.querySelector('.ativo');

console.log(primeiroAtivo.innerHTML)

// Retorne a linguagem do navegador

const linguagemWeb = window.navigator.language;

console.log('A linguagem do navegador é', linguagemWeb)

// Retorne a largura da janela 

const tamanhoClient = window.innerWidth;

console.log('o tamanho da largura é de', tamanhoClient)
// Retorne no console todas as imagens do site

const imagensDoSite = document.querySelectorAll('img')

console.log(imagensDoSite)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]')

console.log(imagensAnimais)
// Selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll('[href^="#"]');

console.log(linksInternos)

// Selecione o primeiro h2 dentro de .animais-descricao

const animaisDescricao = document.querySelector('.animais-descricao')
const primeiroH2A = animaisDescricao.querySelector('h2')

console.log(primeiroH2A)

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p')

cconsole.log(paragrafos[paragrafos.length - 1])
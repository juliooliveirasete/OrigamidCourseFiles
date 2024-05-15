// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImagem = document.querySelector('img')

console.log(primeiraImagem.offsetTop)

// Retorne a soma da largura de todas as imagens

window.onload = function() {
  const todasImagens = document.querySelectorAll('img');

  let contagem = 0;
  
  todasImagens.forEach(img => {
    contagem = contagem + img.offsetWidth;
  });

  console.log(contagem)
}

//console.log("Soma da largura de todas as imagens:", contagem, "pixels");

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach(link => {
  const linkWidth = link.offsetWidth
  const linkHeight = link.offsetHeight

  if(linkWidth >= 48 && linkHeight >= 48){
    console.log('Possui Acessibilidade')
  } else {
    console.log('Não Possui Boa Acessibilidade')
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall) {
  const menuTop = document.querySelector('.menu');
  menuTop.classList.add('menu-mobile');
}
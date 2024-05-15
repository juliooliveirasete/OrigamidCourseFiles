const menu = document.querySelector('.menu');

menu.classList.add('ativo');

menu.classList.toggle('azul');


const animais = document.querySelector('.animais');

// console.log(animais.attributes['class'])

const img = document.querySelector('img');

const srcImg = img.getAttribute('src');

img.setAttribute('alt', 'é uma raposa');

const possuiAlt = img.hasAttribute('alt');

const carro = {
    modelo: 'Azira',
    andar: function(km){
        console.log(`andou ${km}`)
    }
}
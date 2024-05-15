const animais = document.getElementById('animais');

const gridSection = document.getElementsByClassName('grid-section');

const primeiraUl = document.querySelector('ul');

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const animasImg = document.querySelectorAll('.animais img');

const primeiraLi = document.querySelector('ul');

const gridSectionHtml = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

/* console.log(gridSectionHtml[0]);
console.log(gridSectionNode[0]); */

const arrayGrid = Array.from(gridSectionHtml);

gridSectionNode.forEach(function(item, index){
    console.log(index);
})

arrayGrid.forEach(function(item) {
    console.log(item);
})
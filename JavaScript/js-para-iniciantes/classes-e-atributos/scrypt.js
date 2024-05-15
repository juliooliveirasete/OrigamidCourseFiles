// Adicione a classe ativo a todos os itens do menu

const menuItems = document.querySelectorAll('.menu ul li')

menuItems.forEach((item) => {
    item.classList.add('ativo');
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menuItems.forEach((item, index) => {
    if (index !== 0) {
        item.classList.remove('ativo');
    }
});

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img');

imgs.forEach((imgs) => {
    if(imgs.hasAttribute('src')) {
        console.log('Possui SRC')
    } else {
        console.log('Não possui SRC')
    }
})

// Modifique o href do link externo no menu

const linkExterno = document.querySelector('.menu li .link');

linkExterno.setAttribute('href', 'https://www.google.com/'); // muda o href
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll('a[href^="#"]');

function addAtivo(event) {
    event.preventDefault(); // Isso previne o comportamento padrão do link

    const linkClicado = event.target; // Captura o link que foi clicado
    
    // Remove a classe 'ativo' de todos os links
    links.forEach(link => {
        if (link !== linkClicado) {
            link.classList.remove('ativo');
        }
    });
    
    // Adiciona a classe 'ativo' apenas ao link clicado
    linkClicado.classList.add('ativo');
}

// Adiciona o evento de clique para cada link
links.forEach(link => {
    link.addEventListener('click', addAtivo);
});


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *');

function handleElemento(event) {
    console.log(event.currentTarget);
}

todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento);
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

/* document.body.addEventListener('click', function(event) {
    event.target.remove();
}) */

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

const h1 = document.querySelectorAll('h1');
const h2 = document.querySelectorAll('h2');
const p = document.querySelectorAll('p');

function aumentarTamanho(event){
    if(event.key === 't') {
            document.documentElement.classList.toggle('texto-maior')
    }
}

window.addEventListener('keydown', aumentarTamanho);


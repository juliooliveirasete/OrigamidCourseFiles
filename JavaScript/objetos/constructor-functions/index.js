// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function() {
        console.log(this.nome + ' andou');
    }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa('João', 20)
const maria = new Pessoa('Maria', 25)
const bruna = new Pessoa('Bruna', 15)

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Manipule(seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = function (classe) {
        elementList.forEach(element => {
            element.classList.add(classe)
        });
    }
    this.removeClass = function (classe) {
        elementList.forEach(element => {
            element.classList.remove(classe)
        });
    }
}

const li = new Manipule('li');

console.log(li.addClass('o'))
console.log(li.removeClass('o'))
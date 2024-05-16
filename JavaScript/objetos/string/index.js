// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
}

const alex = new Pessoa('Alex', 'Silva', 20)

console.log(alex.nomeCompleto())

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // FUNCTION
li.innerText; // STRING
li.value; // NUMBER
li.hidden; // BOOLEAN
li.offsetLeft; // NUMBER
li.click(); // UNDEFINED

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // STRING

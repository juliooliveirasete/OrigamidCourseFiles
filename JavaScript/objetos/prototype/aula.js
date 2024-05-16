function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.abracar = function() {
        return 'abraçou';
    }
    this.andar = function() {
        return 'Andou pelo objeto'
    }
}

Pessoa.prototype.andar = function () {
    return this.nome + ' Pessoa andou'
}

Pessoa.prototype.nadar = function () {
    return this.nome + ' Pessoa nadou'
}

const andre = new Pessoa('Andre', 28)

// console.log(Pessoa.prototype)
// console.log(andre.prototype)

const pais = 'Brasil';
const cidade = new String('Rio')

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

const listaItems = document.querySelectorAll('li');

const listaArray1 = Array.prototype.slice.call(listaItems);
const listaArray2 = Array.from(listaItems);

const Carro = {
    marca: 'Ford',
    perco: 2000,
    andar() {
       return true 
    }
}
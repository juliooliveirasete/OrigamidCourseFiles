// FORMA INCORRETA DE USAR UM OBJETO COMO PADRÃO

/* const carro = {
    marca: 'Marca',
    preco: 0,
}

const honda = carro;
honda.marca = 'Honda';
honda.preco = 20000;

const Chevrolet = carro;
Chevrolet.marca = 'Chevrolet';
Chevrolet.preco = 20000; */

// Constructor Functions

function Carro() {
    this.marca = 'Marca';
    this.preco = 2000;
}

const honda = new Carro();
honda.marca = 'Honda'

const fiat = new Carro();
fiat.marca = 'Fiat';

// Simplificado

function Nave(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}

const astra = new Nave('Chevrolet', 19500)
const Civic = new Nave('Honda', 35000)

// This Keyword

function Carro2(marcaAtribuida, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marcaAtribuida;
    this.preco = precoFinal;
}

const mazda = new Carro2('mazda', 30000)


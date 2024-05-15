/* const Dom = {
    seletor: 'li',
    element() {
        return elementoSelecionado = document.querySelector(this.seletor);
    },
    ativar() {
        this.element().classList.add('ativar');
    }
} 

Dom.ativar();
Dom.seletor = 'ul';
Dom.ativar();

*/

function Dom(seletor) {
    this.element = function() {
        return elementoSelecionado = document.querySelector(seletor);
    };
    this.ativar = function() {
        this.element().classList.add('ativar');
    };
}

const li = new Dom('li');
const ul = new Dom('ul');

const liLast = new Dom('li:last-child');
liLast.ativar()
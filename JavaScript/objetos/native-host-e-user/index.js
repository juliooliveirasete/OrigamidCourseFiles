// Liste 5 objetos nativos / Globais

Object
String
Array
Function
Symbol

// Liste 5 objetos do browser

window
document
location
navigator
history
NodeList

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if (typeof document.webkitVisibilityState !== "undefined") {
    console.log('Existe');
} else {
    console.log('Não existe');
}
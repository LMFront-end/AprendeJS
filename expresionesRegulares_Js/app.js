/*
Expresiones regulares
Son una secuencia de caracteres que forma un patrón de busqueda, principalmente utilizada para la busqueda de patrones de cadenas de caracteres.
*/

let cadena = 'Reprehenderit ipsum aliquip sint elit consequat excepteur id veniam aute aliquip. Commodo eu laborum aliqua quis dolore minim enim aute consectetur occaecat. Sint et aute ut id esse reprehenderit est sint reprehenderit laborum laborum elit cupidatat. Sunt cupidatat est voluptate voluptate occaecat est magna duis eu enim irure sit. Ipsum ullamco sit sit consectetur elit eiusmod laboris nulla adipisicing qui officia qui. Cupidatat et et cillum esse incididunt tempor minim non deserunt duis occaecat adipisicing sit sunt';

let expReg = new RegExp('laborum', 'g');
let expReg2 = /\d/ig;

console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));

console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));

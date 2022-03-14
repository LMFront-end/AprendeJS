/* 
Una función es un bloque de codigo, autocontenido, que se puede definir una vez y ejecutar en cualquier momento.Opcionalmente, una función puede aceptar parametros y devolver un valor.

las funciones en Javascript son objetos, un tipo especial de objetos: 

Se dice qe las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, y pueden pasarse como argumentos y usarse como un valor de retorno.

*/

//Funciones declaradas

function estoEsUnaFuncion() {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

//invocacion de funcion
estoEsUnaFuncion();


//funcion que devuelve valor

/*
Cuando se declara un retorno dentro de una funcion, este ignora todas las lineas de codigo que se encuentren debajo de este.
fin de la funcion

*/

function devuelveValor() {
    return `Lo que ha retornado esta función`
}

console.log(devuelveValor());


//funcion con parametros

//saludar(nombre, edad) --> parametros de una función
function saludar(nombre, edad) {
    return `Hola mi nombre es ${nombre} y tengo ${edad} años de edad. Es un placer conocerte.`;
}

let res = saludar("Lina", 22);
console.log(res);

//funcion declarada Vs funciones expresadas

funcionDeclarada();

function funcionDeclarada() {
    console.log("este tipo de función puede declararse en cualquier parte de nuestro codigo, incluso antes de ser declarada");
}

funcionDeclarada();

//funciones expresadas (todas con const)

//funcionExpresada();

//funcion anonima
const funcionExpresada = function() {
    console.log("esta es una funcion expresada, es decir una funcion que se le ha asignado como valor a una variable. Si invocamos esta función antes de se definifcion javascript nos dirá...");
}

funcionExpresada();
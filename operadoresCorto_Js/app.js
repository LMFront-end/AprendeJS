/*
Cortocircuito OR --> Cuando el valor de la izquierda en la expresión siempre pueda validar a tre, es el valor que se cargará por defecto.

Cortocircuito AND --> Cuando el valor de la izquierda en la expresión pueda validar a false, es el valor que se cargará por defecto.
*/

function saludar(nombre) {
    nombre = nombre || `Desconocido`;
    console.log(`Hola ${nombre}`);
}

console.log(`Lina`);
saludar();

/* valores verdaderos OR */

console.log(`Cadena` || `Valor de la derecha`);
console.log(19 || `Valor de la derecha`);
console.log(true || `Valor de la derecha`);
console.log([] || `Valor de la derecha`);
console.log({} || `Valor de la derecha`);

/* Valores falsos con OR */

console.log(false || `Valor de la derecha`);
console.log(undefined || `Valor de la derecha`);
console.log(null || `Valor de la derecha`);
console.log("" || `Valor de la derecha`);
console.log(-2 || `Valor de la derecha`);

/* valores verdaderos AND */

console.log(`Cadena` && `Valor de la derecha`);
console.log(19 && `Valor de la derecha`);
console.log(true && `Valor de la derecha`);
console.log([] && `Valor de la derecha`);
console.log({} && `Valor de la derecha`);


/* valores falsos con AND */

console.log(false && `Valor de la derecha`);
console.log(undefined && `Valor de la derecha`);
console.log(null && `Valor de la derecha`);
console.log("" && `Valor de la derecha`);
console.log(-2 && `Valor de la derecha`);
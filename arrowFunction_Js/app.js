//funcion expresada es aquella a la cual se le asigna a una variable una fn anonima

const saludo = function() {
    console.log(`Hola`);
}
saludo();

//arrow funtion

const saludo1 = () => console.log(`Lina`);
saludo1();

const saludo2 = (nombre) => console.log(`Hola ${nombre}`);

saludo2(`Mateo`);

const saludo3 = nombre => console.log(`Hola ${nombre}`);
saludo3(`Santiago`);

/*
const sumar = function(a, b) {
    return a + b;
}

console.log(sumar(2, 3));
*/

const restar = (a, b) => a - b;
console.log(restar(10, 7));

//si la arrow function tiene varias lineas de codigo se debe respetar el cuerpo de la fn

const funcionVariasLineas = () => {
    console.log(`a`);
    console.log(`b`);
    console.log(`c`);
}
funcionVariasLineas();

//funcion declarada --> permite ser invocada antes de ser creada.

saludar();

function saludar() {
    console.log(`Como estas?`);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

/*
numeros.forEach(function(el, index) {
    console.log(`Elemento ${el} esta en la posicion ${index}`);
});
*/

//usando arrow function 
numeros.forEach((el, index) => console.log(`Elemento ${el} esta en la posicion ${index}`));


/*
function perro() {
    console.log(this);
}

perro();
*/

const perro = {
    nombre: `Milo`,
    ladrar: () => {
        console.log(this);
    }
}

perro.ladrar();

/*
No tiene sus propios enlaces a this o super y no se debe usar como métodos.
No tiene argumentos o palabras clave new.target.
No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
No se puede utilizar como constructor.
No se puede utilizar yield dentro de su cuerpo.

*/
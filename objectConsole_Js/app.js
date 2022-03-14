console.log(console);

//console.error
console.error(`Este es un error gravisimo`);

//console.warn
console.warn(`Este es un aviso`);

//console.info
console.info(`Este es un mensaje informativo`);

//console.log
console.log(`Un registro de lo que está pansando en nuestra aplicación`);

let nombre = `Lina`;
let apellido = `Guerrero`;
let edad = 22

console.log(nombre);
console.log(apellido);
console.log(edad);

console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años de edad.`);

//usando comodines
console.log(`Hola mi nombre es %s %s y tengo %d años de edad.`,
    nombre, apellido, edad);

//console.clear();
console.clear();

//window
console.log(window);
console.log(document);

//console.group
console.group(`Cursos que tengo que mirar`);
console.log(`Javascript`);
console.log(`Node.js`);
console.log(`React`);
console.log(`Firebase`);
console.groupEnd();

//console.table
console.log(console);
console.table(Object.entries(console).sort());

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const vocales = ["a", "b", "c", "d", "e", "f"];

console.table(numeros);
console.table(vocales);

const arr = [...numeros, ...vocales];
console.table(arr);

const perro = {
    nombre: `Milo`,
    raza: `Criollo`,
    color: `Amarillo`
}

console.table(perro);

console.clear();

//console.time

console.time(`Cuanto tiempo tarda mi código`);

const arreglo = Array(1000);

for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i;
}

console.timeEnd(`Cuanto tiempo tarda mi código`);
//console.log(arreglo);


//console.count
console.clear();

for (let i = 0; i <= 100; i++) {
    console.count(`Código for`)
    console.log(i);
}

console.clear();

let x = 4;
y = 2;

pruebaXY = `Se espera que x siempre sea menor que y`;

//Se ejecuta cuando la prueba falla
console.assert(x < y, { x, y, pruebaXY });
/*let musica = "pop";

function preferencia() {
    let musica = "rock"
    console.log("Variable dentro del bloque " + musica);
}

preferencia();

console.log("variable fuera del bloque " + musica);

var musica1 = "metalica"

function preferencia2() {
    var musica1 = "vallenato"
    console.log(musica1);
}

preferencia2();
console.log(musica1);
console.log(window);
*/

/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros);

numeros.push(10);
console.log(numeros);
*/


/*
1. Primitivos: Se accede directamente al valor.

    * String
    * number
    * boolean
    * null
    * Undefined
    * NaN (not a number)
*/

/*

// string (" ", ' ', ` `)
let palabra = new String("Hola");
console.log(palabra);

let mensaje1 = "Hola chicos";
let mensaje2 = 'Hola chicos';
let mensaje3 = `Hola chicos`;

let nombre = 'Lina';
let apellido = 'Guerrero';
let edad = 22;

// metodo typeof()
console.log(typeof(edad));

//toLocaleUpperCase();
console.log(nombre.toLocaleUpperCase());

//concatenar con (+)
console.log("Hola mi nombre es " + nombre + " " + apellido + " y tengo " + edad + " años de edad");

//templates string
console.log(`Hola mi nombre es ${nombre} ${apellido}, y tengo ${edad} años de edad`);


//console.log(mensaje1, mensaje2, mensaje3);


//number

let numero1 = 123;
let numero3 = 1234.67;
console.log(typeof(numero1));
let numero2 = '124';
console.log(typeof(numero2));

//pasar un string a numero
console.log(typeof(parseInt(numero2)));

let valor = 13;
console.log(typeof(valor));

console.log(isNaN(valor)); //me genera un valor booleano

*/
//boolean

let verdadero = true;
/*
if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
*/

console.log(Boolean([]));
console.log(Boolean(true));
console.log(Boolean(42));
console.log(Boolean("hola"));
console.log(Boolean(-43));



let falso = false;

/*
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
*/
console.log("****************************");
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(NaN));



// null y undefined


let inicio;
console.log(inicio); // undefined

let limon = null;
console.log(limon); // null


//NaN

let num1 = '3';
let num2 = 3;
let suma = (num1 * num2);
console.log(suma); // NaN
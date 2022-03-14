const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Sin destructuracion
let uno = numeros[0];
dos = numeros[1];
tres = numeros[2];

console.log(uno, dos, tres);

//con destructuracion

const [one, two, three, four, five] = numeros;
console.log(one, two, three, four, five);


let persona = {
    nombre: 'Lina',
    apellido: 'Guerrero',
    edad: 22
}

let { nombre, apellido, edad } = persona;
console.log(nombre, apellido, edad);


let a, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);

const x = [c, d, ...rest] = [1, 2, 3, 4, 5, 6, 7];
console.log(c);
console.log(d);
console.log(rest);
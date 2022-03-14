/* CADENAS DE TEXTO */

let nombre = 'Lina'; //comillas simples

let apellido = "Guerrero"; // comillas dobles (mas usada)

console.log(nombre, apellido);

//longitud propiedad length
console.log(
    nombre.length,
    apellido.length);

//metodos de strings

/* to lowerCase (minsculas) */

console.log(nombre.toLowerCase());

/* to upperCase (maysculas)*/

console.log(apellido.toUpperCase());

/* includes (buscador de coincidencias)*/
/* trim (elimina los espacios en blanco)*/

let lorem = "Aute sit elit non enim proident deserunt nostrud anim eiusmod pariatur deserunt eiusmod dolor. Enim cupidatat fugiat consectetur in. Sint ipsum cupidatat ut nulla ut. eiusmod"

console.log(lorem.includes("eiusmod"));
console.log(lorem.includes("Aute"));
console.log(lorem.includes("lina"));

/* split( genera un arreglo de una cadena de texto)*/

console.log(lorem.split(" "));
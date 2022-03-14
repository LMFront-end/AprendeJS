//variable var (ambito global)
/* NO USAR todas las variables declaradas con var quedaran en el objeto global de todo el documento (ver en console.log(window))*/

var saludo = "Hola";
console.log(saludo);

//variable let (ambito de bloque)

let hello = "hello world";
console.log(hello);


/* Ejercicio de variable*/

//var
var musica = "rock";
console.log("declaracion de variable antes del bloque", musica);

{
    var musica = "pop";
    console.log("declaracion de variable en el bloque", musica);
}

console.log("declaracion de variable despues fuera del bloque", musica);

console.log("***********************");


//let (no se agrega al objeto global)

let musica2 = "rock";
console.log("declaracion de variable antes del bloque", musica2);

{
    let musica2 = "pop";
    console.log("declaracion de variable en el bloque", musica2);
}

console.log("declaracion de variable despues fuera del bloque", musica2);
/** CICLO WHILE**/

//aumenta
let contador = 0;

while (contador < 10) {
    console.log(contador);
    contador++;
}

//disminuya
let contador1 = 10;

while (contador1 > 0) {
    console.log(contador1);
    contador1--;
}


/** CICLO FOR **/

let i = 0;

for (let i = 0; i < 10; i++) {
    console.log("for " + i);
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

numeros.push(200);

for (let j = 0; j < numeros.length; j++) {
    console.log(numeros[j]);
}


/** FOR IN **/

const LINA = {
    nombre: "Lina",
    apelido: "Guerrero",
    edad: 22
}

for (const key in LINA) {
    console.log(`Key: ${key}. Value: ${LINA[key]}`);

}

/** FOR OF **/

for (const elemento of numeros) {
    console.log(elemento);
}

let cadena = "Hola mundo";

for (const caracter of cadena) {
    console.log(caracter);
}
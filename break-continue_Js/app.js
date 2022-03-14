const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//los break y continue no se usan con los metodos de los arreglos

for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
        //llega gasta el numero 5
        break;
    }
    console.log(numeros[i]);
}

console.log("*******************");

for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
        //llega gasta el numero 5 y se salta en numero 6.
        //omite la posicion
        continue;
    }
    console.log(numeros[i]);
}
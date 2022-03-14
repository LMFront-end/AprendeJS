//Parametro rest --> Nos permite representar un numero indefinido de argumentos de un array
function sumar(a, b, ...c) {
    //return a + b
    let resultado = a + b

    c.forEach(function(n) {
        resultado += n;
    });

    return resultado;
}

console.log(sumar(1, 2, 4));
console.log(sumar(1, 2, 6, 4));
console.log(sumar(1, 2, 3, 5, 9));
console.log(sumar(1, 2, 5, 6, 7, 19));

//Operador spread --> podemos sumar arrays, hacer copias, añadir nuevos elementos... Tambien podemos usar el spread operator para pasar elementos de un array como parametros de una funcion.

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

console.log(arr1, arr2);

const arr3 = [...arr1, ...arr2];
console.log(arr3);

//ejemplo 2

//El operador spread permite que los elementos de un array se expandan. Esto nos permite crear un array dentro de otro, sin que nos devuelva un array anidado.

let miArray = [3, 4];

let arr = [1, 2, ...miArray, 5];
console.log(arr);
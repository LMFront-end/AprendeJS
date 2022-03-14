import saludar, { PI} from './constantes.js'
//podemos poner un alias con as
import {aritmetica as calc} from './aritmetica.js'


console.log(`Archivo js`);

console.log(PI);

/*
ORDENAMIENTO DE CÓDIGO

    1. Implementación de módulos.
    2. Declaración de variables.
    3. Declaración de funciones.
    4. Ejecución de código.
*/

console.log(calc.sumar(2,8));
console.log(calc.restar(3,4));
saludar();
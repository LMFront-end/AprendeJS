//if else

//let edad = prompt('¿cual es tu edad?');

/*

if (edad >= 18) {
    console.log('Felicidades ya eres mayor edad, ¡Se responsable!');
} else {
    console.log('Aun no eres mayor de edad, espera algunos añitos');
}
*/

//if anidados

//rango de horas
/*
0hrs a 5grs --> Dejamé dormir
6am a 11 am --> buenos días
12pm a 18pm --> buenas tardes
19pm a 23pm --> buenas noches
*/

let hora = 17;

if (hora >= 0 && hora <= 5) {
    console.log('Dejamé dormir');
} else if (hora >= 6 && hora <= 11) {
    console.log('Buenos días');
} else if (hora >= 12 && hora <= 18) {
    console.log('Buenas tardes');
} else {
    console.log('Buenas noches');
}

/** SIMPLICACION DEL IF ELSE**/

//Operador ternario (condicion) ? verdadero : falso; --> para una sola linea de codigo

console.log('operador ternario');
let edad = 18;
let Mayoredad = (edad >= 18) ?
    "Eres mayor de edad" :
    "Eres menor de edad";
console.log(Mayoredad);


/** OPERADOR SWITCH CASE **/

/*
-Domingo -1
-Lunes -2
-Martes -3
-Miercoles -4
-Jueves -5
-viernes -6
-sabado -7

*/

let dia = 3;

switch (dia) {
    case 0:
        console.log('Domingo');
        break;

    case 1:
        console.log('Lunes');
        break;

    case 2:
        console.log('Martes');
        break;

    case 3:
        console.log('Miercoles');
        break;

    case 4:
        console.log('Jueves');
        break;

    case 5:
        console.log('Viernes');
        break;

    case 6:
        console.log('Sabado');
        break;


    default:
        console.log('El día no existe');
        break;
}
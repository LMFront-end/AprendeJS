/*Operadores*/

//Operadores de asignación

/** Asignación **/

let x = 9;
console.log(x);

let y = x;
console.log(y);

/** Asignacion de adición**/

let a = 1;
a += 1;
console.log(a);

/** Asignacion de resta **/

let b = 1;
b += 1;
console.log(b);

/**OPERADORES RELACIONES**/

//igual (==) //no es igual (!=) //Estrictamente igual (===) //Desigualdad estricta (!==) // mayor que (>) //mayor o igual que (>=) //menor que (<) // menor o igual que (<=)


/** NOTA**/

// = 1 igual es asignación de variable
// == 2 iguales es comparacion de valores
// === 3 iguales es comparacion de tipo de dato y valor

console.log("9" == 9);
console.log("9" != 8);
console.log("8" === 8);
console.log(9 !== 9);
console.log(9 > 8);
console.log(5 >= 4);
console.log(6 < 8);
console.log(7 <= 4);

/** VALORES DE DECREMENTO**/

let i = 8;
//++i se le añade directamente a la variable
++i;
console.log(i);

/** VALORES DE INCREMENTO **/

let j = 2;
//j++ se imprime la variable y luego se muestra la asignación
j++;
console.log(j);

/** OPERADORES LOGICOS 

! - NOT = Niega, es decir, lo que es verdadero lo vuelve falsoy viceversa.

|| - OR = Cuando tengo 2 o más condiciones con que una se cumple, es decir sea verdadera, el OR será verdadero.

&& AND = Cuando tengo 2 o más condiciones, todas tienes que cumplirse, es decir ambas tienen que ser verdaderas para que AND se valide.


Se utilizan conmunmente para comparar dos valores al mismo tiempo.
**/

//NOT
console.log(true);
console.log(false);

//OR
console.log(9 === 9 || "9" === 9);

//AND
console.log(9 === 9 && "9" === "9");
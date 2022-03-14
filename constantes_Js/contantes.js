// const permite crear variables que no van a cambiar a lo largo del codigo eje. PI. A diferencia de la variable let, tienes que declarar e inicializar las constantes 

const PI = 3.1416;
console.log(PI);

// Cuando se declaran valores primitivos con la variable const no puedes reasignar el valor.

//cuando se declaran variables constantes con valores compuestos puedes modificar la variable, ya que se está accediendo a una referencia del valor, no al valor directamente en sí.

const colores = ["negro", "blanco", "violeta"];

console.log(colores);

//para agregar un elemento a lista de colores
colores.push("cyan", "rojo");

console.log(colores);
const a = [];
const b = [1, true, "hola", ["A", "B", "C", [1, 2, 3]]];
console.log(a);
console.log(b);
//longitud de elementos
console.log(b.length);
//posiciones de los elementos
console.log(b[2]); //Hola
//acceder a un arreglo dentro de un arreglo
console.log(b[3][2]); //C
console.log(b[3][3][0]); //1

//objeto array
const c = Array.of("X", "Y", "Z", 1, 2, 3);
console.log(c);

const d = Array(100).fill("Lina");
console.log(d);

const colores = ["Rojo", "verde", "azul"];
console.log(colores);

//metodo para agregar elementos
colores.push("negro", "Naranja");
console.log(colores);

//para borrar elementos (pop) -->ultimo elemento
colores.pop();
console.log(colores);

//metodo forEach()
colores.forEach(function(elemento, index) {
    console.log(`<li>${index} ${elemento}</li>`);
});
let nombre = `Milo`;
let edad = 5;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function() {
        console.log(`guauu guauuu!`);
    }
}

console.log(perro);
perro.ladrar();


const dog = {
    nombre,
    edad,
    raza: `callejero`,
    ladrar() {
        console.log(`guauu guauuu guauuu!`);
    }
}

console.log(dog);
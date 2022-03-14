//las clases no reciben parametros
class Animal {
    //el constructir es un metodo especial que se ejecuta en el momento de instanciar la clase.
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    //Métodos
    sonar = function() {
        console.log(`Hola soy ${this.nombre} y hago sonidos porque estoy vivo`);
    }

    saludar = function() {
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
        //con el metodo super() se manada a llamar el constructir de la clase padre.

        super(nombre, genero);
        this.tamanio = tamanio;
    }

    sonar() {
        console.log(`Soy un perro y mi sonido es un ladrido`);
    }

    ladrar() {
        console.log(`guauuu guauu`);
    }
}


const mini = new Animal("Mini", "hembra");
const scooby = new Perro("scooby", "macho", "gigante");

console.log(mini);
mini.sonar();
mini.saludar();
console.log(scooby);
scooby.sonar();
scooby.ladrar();
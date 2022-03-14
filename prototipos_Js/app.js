/*
POO --> Programación orientada a objetos

Clases --> Modelo a seguir
Objetos --> Es una instancia de una clase
-Atributos: Caracteristica y propiedad del objeto (son variables dentro de un objeto)
-Meotodos: Son las acciones que un objeto puede realizar (son funciones dentro de un objeto)
*/

/*
const animal = {
    nombre: `Vaca`,
    sonar() {
        console.log(`Hago sonidos porque estoy vivo`);
    }
}
console.log(animal);

const animal2 = {
    nombre: `Lola Bunny`,
    sonar() {
        console.log(`Hago sonidos porque estoy vivo`);
    }
}
console.log(animal2);
*/

//funcion constructora --> donde asignamos los metodos al prototipo, no a la funcion como tal.

//UpperCamelCase
function Animal(nombre, genero) {
    //Atributos
    this.nombre = nombre;
    this.genero = genero;

    /*
    //Métodos
    this.sonar = function() {
        console.log(`Hola soy ${this.nombre} y hago sonidos porque estoy vivo`);
    }

    this.saludar = function() {
        console.log(`Hola me llamo ${this.nombre}`);
    }
    */
}


//Metodos agregados al prototipo de la función constructora

Animal.prototype.sonar = function() {
    console.log(`Hola soy ${this.nombre} y hago sonidos porque estoy vivo`);
}

Animal.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre}`);
}

//Herencia prototipica
/* La palabra clave super es usada para acceder y llamar funciones del padre de un objeto */
function Perro(nombre, genero, tamanio) {
    this.super = Animal; //elemento padre
    this.super(nombre, genero);
    this.tamanio = tamanio;
}

//Perro está heredando de animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// Sobreescritura de métodos del prototipo padre en el hijo

Perro.prototype.sonar = function() {
    console.log(`Soy un perro y mi sonido es un ladrido`);
}

Perro.prototype.ladrar = function() {
    console.log(`Guauuu guauuu!`);
}


// instancias
/*
const snoopy = new Animal("Snoopy", "Macho");
lolaBunny = new Animal("Lola Bunny", "Hembra");
Milo = new Animal("Milo", "Macho");
*/

const snoopy = new Perro("snoopy", "Macho", "mediano")

console.log(snoopy);
snoopy.sonar();
snoopy.saludar();

/*
console.log(lolaBunny);
lolaBunny.sonar();
lolaBunny.saludar();

console.log(Milo);
Milo.sonar();
Milo.saludar();
*/
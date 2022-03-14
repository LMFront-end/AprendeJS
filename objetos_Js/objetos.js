//n objeto es una coleccion de llaves, valores

const LINA = {
    //atributos
    nombre: "Lina María",
    apellidos: "Guerrero Lopez",
    edad: 22,
    pasatiempos: ["programar", "Dormir", "Cocinar"],
    soltera: true,
    contacto: {
        email: "linaMaría@gmail.com",
        twitter: "@LinaDev",
        movil: 3213036782
    },
    //metodo o funcion
    saludar: function() {
        console.log("Hola futuros desarrolladores");
    },

    decirMiNombre: function() {
        //la palabra this hace referencia al objeto en donde este se encuntre.
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años de edad. Me puedes seguir en redes como twitter ${this.contacto.twitter}.`);
    }
}

/* Dentro de un objetos a las variables se les denomina atributos/propiedades y a las funciones se les llama metodos*/

console.log(LINA);
console.log(LINA.nombre);
//acceder a la posicion 
console.log(LINA.pasatiempos[2]);
console.log(LINA.contacto.movil);
console.log(LINA.soltera);
LINA.saludar();
LINA.decirMiNombre();
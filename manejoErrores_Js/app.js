try {
    console.log("En el try se agrega el codigo a evaluar");
    noExiste;
    console.log("Segundo mensaje en el try");

} catch (error) {
    console.log("catch captura culquier error surgido o lanzado en el try");
    console.log(error);

} finally {
    console.log("El bloque finally se ejecutará siempre al final de un bloque try-catch");

}

//personalizar nuestros propios mensajes

try {
    let numero = 10;

    if (isNaN(numero)) {
        throw new Error("El caractér introducido no es un Numero");
    }

    console.log(numero * numero);
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`);
}
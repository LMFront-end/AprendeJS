//función anonima autoejecutable
/*
(function() {
console.log('Mi primer IIFE');
})();

(function(d,w,c) {
    console.log('Mi segunda IIFE');
    console.log(d);
    console.log(w);
    c.log('Este es un console.log')
})(document, window, console);
*/

//clásica
(function(){
console.log('Versión clásica');
})();

//La crockford (Javascript the good parts)
((function(){
console.log('Versión Crockford');
})());

//Unitaria
+function() {
console.log('Versión unitaria');
}();

//Facebook
!function() {
console.log('Versión Facebook');
}();
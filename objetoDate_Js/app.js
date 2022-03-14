console.log(Date());

let fecha = new Date();
console.log(fecha);
console.log(fecha.getDate());
//dia de la semana D L M M J V S --> 0 1 2 3 4 5 6
console.log(fecha.getDay());
//mes Ene feb mar abr may jun jul ago sep oct nov dic --> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
//obtener solo la fecha
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCDay());
console.log(Date.now());

let cumpleLina = new Date(1998, 9, 14);
console.log(cumpleLina);
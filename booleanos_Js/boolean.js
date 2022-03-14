let falso = false;
let verdadero = true;

//constructor boolean

//truthy

/*
if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
*/

console.log(Boolean(true));
console.log(Boolean({}));
console.log(Boolean(42));
console.log(Boolean("foo"));

console.log("***********************");

//Falsy

/*
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
*/

console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(" "));
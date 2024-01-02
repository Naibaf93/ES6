//Compilar: seleccionar el código + click derecho + Run Code

//Ejercicio #1
console.log(window); // del lado del navegador

/*output: no tiene acceso a window
console.log(window);
		^
ReferenceError: window is not defined
*/

console.log(global); // lado de node

//output: accede a datos de información

console.log(self); // del lado de webworker;

/*output: no tiene acceso a window
console.log(self);
		^
ReferenceError: self is not defined
*/

console.log(globalThis);
//output: accede a datos de información
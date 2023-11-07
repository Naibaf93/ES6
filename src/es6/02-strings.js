// anteriormente concatenando

let hello = 'Hello';
let world = 'world';
let epicPhrase = hello + ' ' + world + '!';

// console.log(epicPhrase);

// Template literals

let epicPhrase2 = `${hello} ${world}!`; // aca se utiliza la nueva forma para concatenar con comillas francesas alt + 96

console.log(epicPhrase2);

// multi-line strings

let lorem = 'esto es un string \n ' + 'esto es otra linea'; // esta es otra concatenacion
let lorem2 = `Esta es una frase epica, 
la continuacion de esa frase epica.
`;

console.log(lorem);
console.log(lorem2);
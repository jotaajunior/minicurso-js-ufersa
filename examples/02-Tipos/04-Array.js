// Arrays
// Arrays são estruturas de dados que permitem armazenar uma coleção de valores.
// Os valores podem ser de qualquer tipo, inclusive outros arrays.
// Os valores são armazenados em posições, que começam em 0.
// Para acessar um valor, basta informar a posição entre colchetes.
const primeNumbers = [2, 3, 5, 7, 11, 13];

// Obtém o primeiro número primo
console.log(primeNumbers[0]);

// Obtém o último número primo
console.log(primeNumbers[primeNumbers.length - 1]);

// Obtém o quinto número primo
console.log(primeNumbers[4]);

// Arrays são mutáveis
primeNumbers[0] = 1;
console.log(primeNumbers);

// Arrays podem ser declarados com valores de tipos diferentes
const mixed = [1, 'a', true, null, undefined, [1, 2, 3]];

// Array é um objeto, e possui métodos
console.log(primeNumbers.length);
console.log(primeNumbers.push(17));
console.log(primeNumbers);
console.log(primeNumbers.pop());

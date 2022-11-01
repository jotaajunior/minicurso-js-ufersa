// Strings são cadeias de caracteres, ou seja, uma sequência de letras, números, símbolos, emojis, etc.
const name = 'Elon Musk';

// Strings podem ser declaradas com aspas simples, duplas ou crase
const otherName = "Bill Gates";

// Uma string declarada com crase permite interpolação de variáveis
console.log(`${name} hates ${otherName}`);

// Strings são imutáveis
let myName = 'Elon Musk';
myName[0] = 'B';
console.log(myName); // Elon Musk

// Para alterar uma string, é necessário criar uma nova
myName = 'Bill Gates';
console.log(myName);

// Strings possuem métodos
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.length);
console.log(myName.charAt(0));

// Strings podem ser concatenadas com o operador +
const firstName = 'Elon';
const lastName = 'Musk';
const fullName = firstName + ' ' + lastName;
console.log(fullName);
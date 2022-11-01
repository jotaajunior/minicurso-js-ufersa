// undefined
// Undefined é um tipo de dado que representa a não existência de valor
console.log(typeof undefined);

// undefined é retornado quando uma variável não foi inicializada
let a;
console.log(a);

// undefined é retornado quando uma função não retorna um valor
function ok() {
  console.log('não retorno nada');
}
console.log(ok());

// undefined é retornado quando uma propriedade de um objeto não existe
const pessoa = {
  nome: 'Elon Musk',
  idade: 51,
};

console.log(pessoa.endereço);

// undefined é uma variável global
console.log(window.undefined); // Ou nodejs: global.undefined

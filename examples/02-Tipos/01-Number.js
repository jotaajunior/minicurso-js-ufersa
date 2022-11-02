// Number
// Usado para números, tanto inteiros quanto decimais.
const PI = 3.1415;
console.log(typeof PI);

const totalDeAlunos = 10;
console.log(typeof totalDeAlunos);

// Operam nessa faixa de segurança:
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER)

// Acima ou abaixo dessa faixa, o resultado é impreciso:
console.log(9007199254740992 == 9007199254740993)

// A partir do ES6, é possível usar o separador de milhares:
const preco = 1_000_000;
console.log(preco);

// Number é um objeto, e possui métodos:
console.log(PI.toFixed(2));

// NaN
// Significa Not a Number
// É retornado quando uma operação matemática não pode ser realizada
const valor = 10 - 'a';
console.log(valor);
// Apesar de literalmente significar "não é um número", o tipo de NaN é number
console.log(typeof valor);
// NaN não é igual a ele mesmo
console.log(valor === NaN);
// Para verificar se um valor é NaN, use a função isNaN
console.log(Number.isNaN(valor));

// Infinity
// É retornado quando uma operação matemática ultrapassa o limite de segurança
const absurdo = 10 / 0;
console.log(absurdo);

// -Infinity
// É retornado quando uma operação matemática ultrapassa o limite de segurança
const outroAbsurdo = -10 / 0;
console.log(outroAbsurdo);

// Infinity é igual a ele mesmo
console.log(Infinity === Infinity);

// Operadores aritméticos
// + Adição
const a = 4;
console.log(10 + 3)
console.log(11 + 13 + a)

// - Subtração
console.log(10 - 3)
console.log(11 - 13 - a)

// * Multiplicação
console.log(10 * 3)
console.log(11 * 13 * a)

// / Divisão
console.log(10 / 3)
console.log(20 / a)

// ** Potenciação
console.log(2 ** 3)
console.log(3 ** a)

// % Resto da divisão
console.log(25 % 5)
console.log(10 % 3)

// ++ Incremento
let j = 1;
j++;
j++;

console.log(j)
// -- Decremento
let k = 10;
k--;
k--;
console.log(k)

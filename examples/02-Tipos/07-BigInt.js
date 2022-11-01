// BigInt
// BigInt foram introduzidos no ES2020
// São números inteiros de tamanho arbitrário

// Para declarar um BigInt, basta adicionar n no final do número
const bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);

// BigInt não podem ser misturados com outros tipos
console.log(bigNumber + 1);

// Os operadores aritméticos +, -, *, /, %, **, ++ e -- funcionam com BigInt
console.log(bigNumber + 1n);
console.log(bigNumber - 1n);
console.log(bigNumber * 2n);
console.log(bigNumber / 2n);
// Objetos
// Objetos são uma estrutura de chave e valor.
// Cada chave é um identificador, e cada valor pode ser de qualquer tipo, inclusive outros objetos.
const pessoa = {
  nome: 'Elon Musk',
  idade: 51,
}

// Para acessar um valor:
console.log(pessoa.nome);

// Ou quando o nome da chave é uma variável:
const chave = 'idade';
console.log(pessoa[chave]);

// Ao tentar acessar uma chave que não existe, o valor retornado é undefined
console.log(pessoa.endereço);

// Objetos são mutáveis
pessoa.nome = 'Jeff Bezos';

// Objetos possuem métodos
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

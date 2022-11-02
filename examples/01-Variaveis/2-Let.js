// Let
// São iguais a const, mas permitem reatribuição
let ddd = '084';
console.log('DDD atual: ' + ddd)

// Reatribuição
ddd = '083';
console.log('DDD novo: ' + ddd)

// Objetos
let pessoa = {
  nome: 'Elon Musk',
  idade: 51,
}

// Escopo por bloco
{
  let idade = 40;

  // Escopos inferiores CONSEGUEM acessar variáveis declaradas em escopos superiores
  {
    console.log(idade)
  }
}

// Escopos superiores NÃO CONSEGUEM acessar variáveis declaradas em escopos inferiores
console.log(idade) // ReferenceError
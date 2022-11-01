// Let
// São iguais a const, mas permitem reatribuição
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
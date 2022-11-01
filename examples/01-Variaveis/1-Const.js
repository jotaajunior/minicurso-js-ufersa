// Const
// Sempre que for declarar uma variável que não vai mudar, use const!
const pessoa = {
  nome: 'Elon Musk',
  idade: 51,
}

// Permite modificação
pessoa.idade = 52;

// Não permite reatribuição
pessoa = {
  nome: 'Bill Gates',
  idade: 65,
}

// Escopo por bloco
{
  const idade = 40;

  // Escopos inferiores conseguem acessar variáveis declaradas em escopos superiores
  {
    console.log(idade)
  }
}

// Escopos superiores não conseguem acessar variáveis declaradas em escopos inferiores
console.log(idade) // ReferenceError
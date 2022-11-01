// Funções
// Funções são blocos de código que podem ser executados quando chamados.
// Funções podem receber parâmetros e retornar valores.
// Funções podem ser declaradas com a palavra-chave function, ou com arrow functions.

/// Função comum
function soma(a, b) {
  return a + b;
}

console.log(soma(1, 2));

// Função com arrow function
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 1));

// Funcão com arrow function e corpo
const quadrado = (a) => {
  return a * a;
}

// Funções são executadas até que o interpretador JavaScript encontre um return.
// Se não houver um return, a função retorna undefined.
function exemploReturn() {
  return 'Retorno';

  console.log('Não será executado');
}

function divisaoSegura(a, b) {
  if (b === 0) {
    return 'Indeterminado';
  }

  return a / b;
}

// Arrow functions são mais limitadas que funções comuns

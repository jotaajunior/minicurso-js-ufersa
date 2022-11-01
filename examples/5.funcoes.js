// Funções

function soma(a, b) { // function "nome da função" (parametros)
  return a + b;       // retorna 
}

console.log(soma(1, 12))

// Escopo

const PI = 3.14;

function circumference(radius) {
  return 2 * PI * radius
}

console.log(circumference(5))

// Atualização de variável fora do escopo (Má prática)

let carro = 'Fox';

function pinta(cor) {
  carro += ' ' + cor;
}

pinta('Branco')
console.log(carro)

// Função pura + Parâmetro padrão

function pintaOk(carro, cor = 'Roxo') {
  return carro + ' ' + cor;
}

console.log(pintaOk('Fusca'))

// Rest operator

function max(...nums) {
  let value = nums[0];
  
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] > value) value = nums[i];
  }
  
  return value;
}

console.log(max(1, 2, 3))

function multiplica(multiplicador, ...array) {
  return array.map(i => i * multiplicador);
}

console.log(multiplica(10, 1, 2, 3))
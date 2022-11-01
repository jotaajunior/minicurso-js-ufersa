// Symbol
// Symbol são valores únicos e imutáveis
// Podem ser usados como chaves de objetos
const symbol = Symbol('symbol');
console.log(symbol);
console.log(Symbol('symbol') === Symbol('symbol'));

// Symbol podem ser usados como chaves de objetos
const pessoa = {
  nome: 'Elon Musk',
  idade: 51,
  [Symbol('endereço')]: 'Palo Alto, CA',
};

console.log(pessoa[Symbol('endereço')]);

// E mais algumas coisas legais
class Numbers { 
  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => ({ value: i++, done: false })
    }
  }
}

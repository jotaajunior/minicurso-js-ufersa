// ... (Spread: Obtém os atributos de um array)
const array = [1, 2, 3]
console.log(array)
console.log([...array, 50, 51])

const obj = {
  nome: 'Jorge',
  idade: 23
}

console.log(obj)
console.log({ obj, endereço: 'Rua das Manivelas' })
console.log({...obj, endereço: 'Rua das Manivelas' })

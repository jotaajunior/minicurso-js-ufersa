// && (E)

/*
  | a | b | a && b |
  | 0 | 0 |   0    |
  | 0 | 1 |   0    |
  | 1 | 0 |   0    |
  | 1 | 1 |   1    |
*/
console.log((2 < 1) && (10 === 11)) // F && F
console.log((2 < 1) && (10 === 10)) // F && V
console.log((2 > 1) && (3 === 4))   // V && F
console.log((2 > 1) && (10 === 10)) // V && V

// || (OU)

/*
  | a | b | a || b |
  | 0 | 0 |   0    |
  | 0 | 1 |   1    |
  | 1 | 0 |   1    |
  | 1 | 1 |   1    |
*/
console.log((2 < 1) || (10 === 11)) // F && F
console.log((2 < 1) || (10 === 10)) // F && V
console.log((2 > 1) || (3 === 4))   // V && F
console.log((2 > 1) || (10 === 10)) // V && V

// ! (Não)

/*
  | a | !a |
  | 0 | 1  |
  | 1 | 0  |
*/
console.log(!false)
console.log(!true)
console.log(!(1 === 1))
console.log(!(1 !== 1))
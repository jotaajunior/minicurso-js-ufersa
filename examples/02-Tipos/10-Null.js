// Null
// Null é um tipo de dado que representa a ausência de valor intencional
function getPersonById(id) {
  if (id == 1) {
    return 'Elon Musk'
  }

  if (id == 2) {
    return 'Bill Gates'
  }

  return null
}

// O tipo de null é object
console.log(typeof null); // Isso é um bug legado do JavaScript

// Então null é um objeto?
console.log(null instanceof Object); // false


// Var
var endereço = 'Rua das Manivelas'
console.log('Endereço: ' + endereço)

// Redefinição
var endereço = 'Rua das Cachoeiras'
console.log('Endereço: ' + endereço)

// Escopo por função
function mostrarVencedor(ano) {
  // Não é recomendado utilizar var:
  // Difícil de manter o tracking das variáveis

  if (ano === 1994) {
    var vencedor = 'Brasil'
  }
  
  if (ano === 1998) {
    var vencedor = 'França'
  }

  return vencedor
}

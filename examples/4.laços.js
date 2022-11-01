// For (Verifica após a atribuição)
for(let i = 0; i < 10; i++) {
  console.log(i)
}

// While (Verifica antes de executar a primeira vez)
let counter = 0;
while(counter < 10) {
  console.log(counter++)
}

// Do-While (Executa ao menos uma vez)
let num = 0;
do {
  console.log(num)
  num += 2;
} while(num < 10)

// For in
const arr = [6, 2, 1, 4, 5]

for(const i in arr) {
  console.log(arr[i])
}

// For of
for(const k of arr) {
  console.log(k)
}

// For each
arr.forEach(i => {
  console.log(i)
})
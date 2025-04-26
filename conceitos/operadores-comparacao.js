/*
>   - maior que
  >=  - maior ou igual que
  <   - menor que
  <=  - menor ou igual que
  ==  - igualdade somente de valores
  !=  - diferença somente de valores
  === - igualdade de valores e tipo de dado
  */
 
// maior que >

console.log(`10 > 5 = ${ 10 > 5 }`) // 10 é maior que 5, retorna verdadeiro (true)
console.log(`10 + 5 = ${ 10 + 5 }`)

// maior ou igual que >=

console.log(10 >= 10) // verdadeiro
console.log(10 >= 9) // verdadeiro
console.log(10 >= 20) // false

// menor que <

console.log(`10 < 5 = ${ 5 < 10 }`) // 10 é menor que 5, retorna falso (false)
console.log(`10 + 5 = ${ 10 + 5 }`)

// menor ou igual que <=

console.log(10 <= 10) // verdadeiro
console.log(9 <= 10) // verdadeiro
console.log(20 <= 10) // false

// igualdade somente de valores ==

console.log(1 == "1") // Está comparando somente os 'valores' o número 1 é igual a string 1, retorna true
console.log(10 == "25") // Está comparando somente os 'valores' o número 1 é igual a string 25, retorna falso

// igualdade de valor e tipo ===

console.log(15 === "15") // está comparando os 'valores' e o tipo de dado, o número 15 (tipo number) é diferente to texto 15 (tipo string), retorna false
console.log(15 === 15) // está comparando os 'valores' e o tipo de dado, o número 15 (tipo number) é igual ao número 15 (tipo number), retorna true

// diferente de =!

console.log(5 != 3) // está dizendo que 5 é diferente de 3, retorna true
console.log(3 != 3) // está dizendo que 3 é diferente de 3, retorna false
console.log(15 !== 25) // está dizendo que o tipo number 15 é diferente do tipo number 25, retorna true
console.log(15 !== "25") // está dizendo que o tipo number 15 é diferente do tipo string 25, retorna true
console.log(15 !== "15") // está dizendo que o tipo number 15 é diferente do tipo string 15, retorna true
console.log("15" !== "15") // está dizendo que o tipo string 15 é diferente do tipo string 15, retorna false
/*
 + adição
 - subtração
 * multiplicação 
 / divisão
 % resto
 ** exponencial
*/

console.log(2 + 2)  // soma
console.log(4 - 2) // subtração
console.log(5 * 5) // multiplicação
console.log(100 / 2) // divisao
console.log(11 % 2) // resto da divisao
console.log(4 ** 4) // exponenciação

console.log("5" * 2)

console.log(11 / 2) // 5.5
console.log(parseInt(11 / 2)) // 5.5 -> 5

// arredondamento

// arredonda para baixo
console.log(Math.floor(5.8))

// arredonda para cima
console.log(Math.ceil(5.8))

// arredonda para o mais próximo
console.log(Math.round(5.8))
console.log(Math.round(5.4))
console.log(Math.round(5.5))

// 
const valorDecimal = 2.123123
console.log(valorDecimal.toFixed(3))
/**
 * 
 */

const prompt = require('prompt-sync')()

let valor1 = Number(prompt("Insira o valor 1: "))
let valor2 = Number(prompt("Insira o valor 2: "))

if (valor1 > valor2) {
    console.log(`O valor é maior`)
} else if (valor1 === valor2) {
    console.log(`Os valores são iguais`)
} else {
    console.log(`O valor é menor`)
}

/**  exemplo professor

if (10 < 5) {
    console.log('valor é maior')
  } else {
    console.log('valor é menor')
  }
  
  const idade = 3
  const porte = 'P'
  
  if (idade >= 2) {
    console.log('Pode ser adotado, pela idade')
  } else if (porte === 'P') {
    console.log('Pode ser adotado, pelo porte')
  } else {
    console.log('Não pode ser adotado')
  }
*/

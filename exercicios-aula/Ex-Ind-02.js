/**
Calculadora de ração diária

Crie um script que receba o peso do dog em kg + estoque atual de ração em gramas. Calcule a quantidade diária de ração com base na seguinte fórmula: 

Gramas por dia = Peso x 30 gramas

Exiba:
  Nome do dog
  Peso
  Quantidade de ração recomendada por dia
  Quantos dias o estoque atual vai durar
 
 */

const prompt = require('prompt-sync')()

let nomePet = prompt('Nome do Pet: ')
let pesoPet = prompt('Peso do Pet em kg: ')
let estoqueAtual = prompt("Estoque atual de ração em gramas: ")

let qtdeDiaria = pesoPet * 30
let diasEstoque =  estoqueAtual / qtdeDiaria

console.log(`${nomePet} pesa ${pesoPet}kg.\n
           A quantidade de gramas por dia recomendada é ${qtdeDiaria.toFixed(2)} 
           gramas e o estoque vai durar ${Math.floor(diasEstoque)} dias.`)


// ALTERNATIVA 2, usando função com parâmetros

function calcularConsumoDeRacao(nome, peso, estoque) {
    const gramasPorDia = peso * 30
    const duracaoEstoque = Math.floor(estoque / gramasPorDia)
  
    console.log(`----------------------`)
    console.log(`Nome do dog: ${nome}`)
    console.log(`Peso: ${peso}kg`)
    console.log(`Gramas por dia: ${gramasPorDia}g`)
    console.log(`O estoque vai durar: ${duracaoEstoque} dias`)
    console.log(`----------------------`)
  }
  
  calcularConsumoDeRacao('Ada', 1, 2000)
  calcularConsumoDeRacao('Laninha', 4.2, 15000)
  calcularConsumoDeRacao('Pantera', 14.5, 5000)
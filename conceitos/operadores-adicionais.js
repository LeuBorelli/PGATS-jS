/*

-- decremento
++ incremento
? ternário

*/

// incremento
let pesoLuna = 10
console.log(pesoLuna)

pesoLuna++              //soma 1
console.log(pesoLuna)

//decremento
let pesoWylla = 20      
console.log(pesoWylla)

pesoWylla--             //diminui 1
console.log(pesoWylla)

//ternario
const porteLuna = pesoLuna < 8 ? 'Gatíneo Magríneo' : 'Gato Gordo' // a primeira condição depois do  "?"" é verdadeira se atingida, se não é falsa que vem depois do ":"
const porteWylla = pesoWylla > 25 ? 'Gato Gordo' : ' Gatíneo Magríneo'

console.log(`Portes: A Luna é um ${porteLuna} \n E a Wylla é um ${porteWylla}`)

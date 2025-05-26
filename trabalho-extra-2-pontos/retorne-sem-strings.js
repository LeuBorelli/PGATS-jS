/**
 * Crie uma função que pega uma lista de inteiros e strins e retorna uma nova lista sem as strings
 */

function removerStrings(lista) {
    return lista.filter(item => typeof item === 'number')
}

const listaInicial = [1, "Rosquinha", 3, "Donut", 5, "Chocolate", 7, "Jujuba", 9, "Gominha"]
const listaFinal = removerStrings(listaInicial)

console.log(`------------------`)
console.log(listaFinal)
console.log(`------------------`)
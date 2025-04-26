/**
 *  Funções de seta (arrow) 
 * () => {
 * }
 */

// função noemada, com parâmetro, sem retorno

const prompt = require('prompt-sync')()

const exibirNomeDoPet = (nome) => {
    console.log(`O nome do tomba é: ${nome}`)
}

// função noemada, com parâmetro, e valor ja definido, sem retorno

const exibirPortedoPet = (porte = "Grande") => {
    console.log(porte)
}

// função nomeada, com parâmetro, com retorno

const obterNomeDoPetFormatado = (nome) => {
    return nome.toUpperCase()
}

const obterObjetoPet = () => {
    return {    
        nome: 'Domenica',
        peso: 3.5
    }
}

exibirNomeDoPet(prompt('Nome do Pet: '))
exibirPortedoPet()
console.log(obterNomeDoPetFormatado("Thor"))
console.log(obterObjetoPet())

/**
 * Funções nomeadas
 * 
 * Funções de seta (arrow)
 */

// função noemada, com parâmetro, sem retorno

function exibirNomeDoPet(nome) { 
    console.log(nome)
}

// função noemada, com parâmetro, e valor ja definido, sem retorno

function exibirPortedoPet(porte = 'Grande') {
    console.log(porte)
}

// função nomeada, com parâmetro, com retorno

function obterNomeDoPetFormatado(nome) { 
    return nome.toUpperCase()
}


function obterObjetoPet() {
    return {    
        nome: 'Domenica',
        peso: 3.5
    }
}

exibirNomeDoPet("Lilica")
exibirPortedoPet()
console.log(obterNomeDoPetFormatado("Thor"))
console.log(obterObjetoPet())

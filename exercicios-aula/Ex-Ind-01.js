/**
 * Deve ler o nome, idade e porte do pet
 * Deve ter uma idade minima para adoção
 * Se a idade for menor que a idade minima, não deve ser possível adotar a não ser se o porte for pequeno, nesse caso
 * pode adotar com qualquer idade.
 */



let nomePet = "Luna"
let idadePet = 3
let portePet = "pequeno"

const adotar = idadePet > 2 || portePet === 'pequeno' ? 'pode ser adotado.' : 'não pode ser adotado.'

console.log(`O pet ${nomePet} de porte ${portePet} tem ${idadePet} anos portanto ${adotar}`)

let nomePet2 = "Wylla"
let idadePet2 = 1
let portePet2 = "médio"

const adotar2 = idadePet2 > 2 || portePet2 === 'pequeno' ? 'pode ser adotado.' : 'não pode ser adotado.'

console.log(`O pet ${nomePet2} de porte ${portePet2} tem ${idadePet2} anos portanto ${adotar2}`)


let nomePet3 = "Petit"
let idadePet3 = 1
let portePet3 = "pequeno"

const adotar3 = idadePet3 > 2 || portePet3 === 'pequeno' ? 'pode ser adotado.' : 'não pode ser adotado.'

console.log(`O pet ${nomePet3} de porte ${portePet3} tem ${idadePet3} anos portanto ${adotar3}`)

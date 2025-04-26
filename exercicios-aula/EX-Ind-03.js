/*
Classificador de porte automático
Muitos tutores não fazem ideia do porte de seu Dog.
Crie um script que classifique o porte com base no peso de forma simplificada, sendo:
- Até 10kg -> Pequeno; acima disso -> Médio
Use o operador ternário para determinar o porte. Exiba:
- Nome
- Peso
- Porte classificado
Extra: transforme a lógica em uma função (da forma que conseguir) 
*/

const prompt = require('prompt-sync')()

function classificarPorte (nomePet, pesoPet) {
    console.log(`----------------------`)
    console.log(`Nome do Pet: ${nomePet}`)
    console.log(`Peso do Pet: ${pesoPet}`)   

    const portePet = pesoPet <= 10 ? 'Pequeno' : 'Médio'

    console.log(`O porte é: ${portePet}`)
}

const nome = prompt("Digite o nome do pet: ");
const peso = Number(prompt("Digite o peso do pet: "));

classificarPorte(nome, peso)
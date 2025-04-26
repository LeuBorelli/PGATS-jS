/*
Plano de atividades para o Pet

Crie um script que defina o plano de atividades para os dogs durante a estadia. O script vai receber o porte (pequeno, médio ou grande); 
e o tempo disponível para a atividade representado em minutos. Exemplo:

Pantera - Médio - 45

Use uma condicional para decidir o tipo de atividade com base no porte: 
pequeno -> brincar dentro de casa
médio -> caminhada no quarteirão
grande -> correr no parque
qualquer outro -> porte inválido

Depois, uma condicional para ajustar a mensagem de acordo com o tempo: 
menor que 15 -> "atividade rápida: [atividade]"
de 15 a 30 -> "tempo ideal: [atividade]"
acima de 30 -> "hora da diversão: [atividade] 
*/

const prompt = require('prompt-sync')()

function planoAtividadesPet (nomePet, portePet, tempoDisponivel) {
    console.log(`----------------------`)
    
    const porteNormalizado = portePet.toLowerCase();
    let atividade
    let mensagemTempo

    if (porteNormalizado === 'pequeno' || porteNormalizado === 'p') {
        atividade = "brincar dentro de casa"
    } else if (porteNormalizado === 'medio' || porteNormalizado === 'médio' || porteNormalizado === 'm') {
        atividade = "caminhada no quarteirão"
    } else if (porteNormalizado === 'grande' || porteNormalizado === 'g') {
        atividade = "correr no parque"
    } else {
        atividade = "porte informado inválido";
    }

    if (tempoDisponivel < 15) {
        mensagemTempo = `Atividade rápida: ${atividade}`
    } else if (tempoDisponivel >= 15 && tempoDisponivel <= 30) {
        mensagemTempo = `Tempo ideal: ${atividade}`
    } else if (tempoDisponivel > 30) {
        mensagemTempo = `Hora da diversão: ${atividade}`
    } else {
        mensagemTempo = `Tempo inválido informado.`
    }

    console.log(`Nome do Pet: ${nomePet}`)
    console.log(`Porte do Pet: ${portePet}`)
    console.log(`Tempo disponível: ${tempoDisponivel} minutos`)
    console.log(mensagemTempo)
}

const nome = prompt("Digite o nome do pet: ")
const portePet = prompt("Digite o porte do pet: ")
const tempo = Number(prompt("Digite o tempo de atividade disponível do pet: "))

planoAtividadesPet(nome, portePet, tempo)
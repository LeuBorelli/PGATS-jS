/**
 * Bla bla
 */

const nomeDog = "tH    oR@!%    "
let nomeFormatado = removerCaracteresEspeciais(nomeDog)

nomeFormatado = formatarNome(nomeFormatado)

console.log(nomeDog)
console.log(nomeFormatado)

function removerCaracteresEspeciais(nome) {
    return nome.replace(/\s+/g, "").replace(/[^a-zA-ZÀ-ÿ]/g, "")
}

function formatarNome(nome) {
    if (nome.length === 0) return "";
    return nome[0].toUpperCase() + nome.slice(1).toLowerCase()
}
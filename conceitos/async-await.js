/**
 * 
 */

//async = assincrono
async function exibirNomeGatoFormatado(nome) {
    return nome.toLowerCase()
} 

//await - esperar
console.log(await exibirNomeGatoFormatado(`Jisoo`))

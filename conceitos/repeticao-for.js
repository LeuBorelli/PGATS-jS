/**
 * para  (for)
 * É uma estrutura em que sabemos quantas repetições que queremos fazer
 * temos: contador; condicao; manipulador (incremento ou decremento)
 */

const quantidadeCalculada = 10

for (let cont = 1; cont <= quantidadeCalculada; cont++) {
    console.log(`Dando o petisco de nº ${cont}`)
}

const gatos = ['Luna', 'Wylla', 'Hadouken']

for (let indice = 0; indice < gatos.length; indice++) {
    console.log(`Dando o petisco para ${gatos[indice]}`)
}
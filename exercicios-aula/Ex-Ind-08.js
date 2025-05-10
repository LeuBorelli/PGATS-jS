/**
Entregador de brinquedos para os dogs

Dado que você tenha uma lista de brinquedos com: Bola, Osso, Corda, Sino
Crie um script que passe pela lista de brinquedos e entregue um por vez.
Exiba o nome de cada brinquedo que for entregue.

Use a estrutura de repetição forEach.

Extra: transforme a lógica em uma função (da forma que conseguir).
 */

const listaDeGatas = [
  'Luna',
  'Wylla',
  'Rosé',
  'Jisoo',
  'Ruka'
]

console.log(`------------------------`)

listaDeGatas.forEach(gata => {
    console.log(`A gata ${gata} que um brinquedo!`)
})

const listaDeBrinquedos = [
    {
        nome: 'Wylla',
        toy: 'Bola'
    },
    {
        nome: 'Luna',
        toy: 'Osso'
    },
    {
        nome: 'Rosé',
        toy: 'Corda'
    },
    {
        nome: 'Jisoo',
        toy: 'Sino'
    },
    {
        nome: 'Ruka',
        toy: 'Novelo'
    },
]

console.log(`------------------------`)

listaDeBrinquedos.forEach(gata => {
    console.log(`A gata ${gata.nome} ganhou o brinquedo ${gata.toy}`)
})

console.log(`------------------------`)
console.log(`Todos os brinquedos foram entregues!`)
console.log(`------------------------`)
//Exibir texto no jS
console.log("Hello World")

//Usado quando deve exibir erros ao invés de texto normal (Você define quando der erro, para exibir essa mensagem)
console.log("Exemplo: Falha na Execução")

//Usado aora exibir alertas ao invés de texto normal (Você define quando tiver um aviso, para exibir essa mensagem)
console.warn("Atenção!")

//Usado para exibir objetos em tabelas
console.table([{
    nome: 'Leandro',
    turma: '02',
    disciplina: 'Programação JS'
},
{
    nome: 'Jessica',
    turma: '02',
    disciplina: 'Programação JS'
}])

/**
 * Constantes e Variáveis
 * const - informações que não mudam nunca e devem receber um valor ao ser declarada
 * var ou let - informações que podem mudar e vc pode declara-las sem atribuir um valor
 */

//Informações de um pet que não mudam (const)
const nome = 'Luna'
const raca = 'Vira-lata'
const sexo = 'Femêa'
const cor = 'Branco'
const birthdate = '01/01/2015'
const porte = "Pequeno"

//Informações de um pet que mudam (var ou let)
let idade = 10
let peso = 3.5
let vacinado = false
let castrado = true

/**
 * Tipos de dados (Comparando tipos do Portugol com os tipos do JS)
 * cadeia = String
 * inteiro/real = Number
 * lógico =  Boolean
 * vetor/mtariz = Array
 * undefined = variável declarada sem valor recebe 'undefined' automaticamente, até receber um valor
 * null = valor não foi definido e vai ser nulo
 * BigInt =  é gual ao number mas usado para números muito grandes (com muitos caracteres)
 * Symbol = idenifcador numero para uma variável
 */

// String e Number
const valor = "50"
console.log(valor)

const valor1 = 50
console.log(valor1)

/**
 * Como posso declarar Strings?
 * 'Olá' com aspas simples ou single quote
 * "Olá" com aspas duplas ou double qupte
 * `Olá` com crase ou template strings
 */

//Concatenando strings
const turma2 = "02"
console.log("Aula 03 da turma " + turma2 + " no sábado dia 05 de abril")
console.log(`Aula 03 da turma ${turma2} ${turma2} ${turma2} ${turma2} no sábado dia 05 de abril`) //Interpolação de strings só usa com crase

//Tamamnho (?)
//console.log(data.length)

//Split - separa a string
const nomesDeAlunos = "Leandro Jadson Karla Jenifer"
const nomesdeAlunosSplit = nomesDeAlunos.split(" ") //Vai separar
console.log(nomesdeAlunosSplit)

// Transforma todos os caracteres da constante  em maiúsuculos ou minúsculos
console.log(nomesDeAlunos.toLowerCase())
console.log(nomesDeAlunos.toUpperCase())

//Includes ?? sei la pra que serve -> procura algo na lista ou array e retorne verdadeiro ou falso
console.log(nomesDeAlunos.includes("Jadson"))

//Replace subistitui todos os 'a' da constante por 'i'
console.log(nomesDeAlunos.replaceAll('a', 'i'))

//Trim -> remove espações desnecessários
const conceitosLogica ="                           inteiro, real, cadeia, dedo no cu e gritaria, ihaaaaaaaaa                         "
console.log(conceitosLogica.trim())

//Slice -> cortar as posições da string
let dataParaCortar = "05 de Abril"
let cpf = "05048385985"
console.log(dataParaCortar.slice(1, 7))
console.log(cpf.slice(0,4))

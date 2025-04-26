/*
&& - E / AND
|| - OU / OR
! - NÃO / NOT
*/

// && - and

console.log(true && true) // true

// || - or
// !  - not

const cat = {
    dormeMuito: true,
    peso: 3
}

console.log(!cat.dormeMuito || cat.peso < 10) // uma condição é verdadeira (a exclamação está invertendo/negando o true que foi declarado na variável dorme muito) retorna verdadeiro
console.log(!cat.dormeMuito || cat.peso > 10) // ambas as condições são falsas, retorna false
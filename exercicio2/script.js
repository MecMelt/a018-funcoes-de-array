// # Exercício 2
// Crie um array de números que contenha 8 números.
// Depois disso, utilize este array para criar duas funcões de array `map()`:

// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;
// 2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const;

const array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const arrayM = array.map((numero) => numero*3)
console.log(arrayM)

const tri = arrayM

const array1 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

const arrayM1 = array1.map((numero1) => numero1/2) 
console.log(arrayM1)

const metades = arrayM1
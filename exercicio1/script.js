// # Exercício 1

// Crie duas funcões que recebem como parâmetro um objeto.
// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.
// 2. A segunda deve retornar os valores do objeto como texto corrido.

// 3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2

// let objeto = {
//     nome: "astrodev",
//     profissao: "Dev das estrelas",
//     username: "astrodev_labenu",
//     senha: "melhorDeTodos"
// }

// const cxAlta = (meuObjt) => {
//     meuObjt.nome = meuObjt.nome.toUpperCase()
//     meuObjt.profissao = meuObjt.profissao.toUpperCase()
//     meuObjt.username = meuObjt.username.toUpperCase()
//     meuObjt.senha = meuObjt.senha.toUpperCase()
//     console.log(meuObjt)
// }

// const txtCor = (meuObjt) =>{
//     let texto = null
//     texto = meuObjt.nome
//     texto += meuObjt.profissao
//     texto += meuObjt.username
//     texto += meuObjt.senha
//     console.log(texto)
// }

// const cb = (meuObjt, funcaocxAlta, funcaotxtCor) =>{
//     funcaocxAlta(meuObjt)
//     funcaotxtCor(meuObjt)
// }

// cb(objeto, cxAlta, txtCor)

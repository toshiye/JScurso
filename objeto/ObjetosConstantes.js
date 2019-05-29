// pessoa -> 123 -> {...}
const pessoa = {nome: 'Sara'}
pessoa.nome = 'SaChan'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {nome: 'Samara'}

Object.freeze(pessoa)
pessoa.nome = 'ToChan'
pessoa.end = 'Rua de Casa'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Sara'})
pessoaConstante.nome = 'SaChan'
console.log(pessoaConstante)
// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})
console.log('Extensível: ', Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'Borracha branca escolar.'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {nome: 'Sara', idade: 1}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))
pessoa.sobrenome = 'Sassaki'
delete pessoa.nome
pessoa.idade = 1.8
console.log(pessoa)

// Object.freeze = selado + valores constantes
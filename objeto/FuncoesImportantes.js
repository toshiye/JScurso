const pessoa = {
    nome: 'Sara',
    idade: 1,
    peso: 12
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

/*
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})*/

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '18/10/2017'
})
pessoa.dataNascimento = '01/01/2019'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const obj1 = {b: 2}
const obj2 = {c: 3, a: 4}
const obj = Object.assign(dest, obj1, obj2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
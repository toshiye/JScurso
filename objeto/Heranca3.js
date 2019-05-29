const pai = {nome: 'JiChan', corCabelo: 'Preto'}

const filho = Object.create(pai)
filho.nome = 'ToChan'
console.log(filho.corCabelo)

const filha = Object.create(pai, {
    nome: {value: 'Punka', writable: false, enumerable:true}
})
console.log(filha.nome)
console.log(`${filha.nome} tem cabelo ${filha.corCabelo}`)

console.log(Object.keys(filho))
console.log(Object.keys(filha))

for (let key in filha) {
    filha.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}
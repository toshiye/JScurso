const alunos = [
    {nome: 'Sara', nota: 9.2, bolsista: false},
    {nome: 'KaChan', nota: 8.7, bolsista: true},
    {nome: 'ToChan', nota: 9.8, bolsista: false},
    {nome: 'BaChan', nota: 7.3, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)
const alunos = [
    {nome: 'Sara', nota: 9.2},
    {nome: 'Samara', nota: 7.9}
]

// Imperativo
let total1 = 0
for (var i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//Declarativa
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
const alunos = [
    {nome: 'Sara', nota: 9.2, bolsista: false},
    {nome: 'KaChan', nota: 8.7, bolsista: true},
    {nome: 'ToChan', nota: 9.8, bolsista: false},
    {nome: 'BaChan', nota: 7.3, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?
const todoOsBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todoOsBolsistas))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
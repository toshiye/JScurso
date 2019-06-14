const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Sara',
        nota: 8.1
    }, {
        nome: 'SaChan',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Safira',
        nota: 8.9
    }, {
        nome: 'Miguel',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

const notasTeste = escola.flatMap(getNotasDaTurma)
console.log(notasTeste)

//Não funcionou
/*
Array.prototype.flatMap1 = function(callback) {
    return Array.prototype.concat.apply([, this.map(callback)])
}
const notas2 = escola.flatMap1((getNotasDaTurma))
console.log(notas2)*/

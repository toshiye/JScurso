// Par Nome/Valor
const saudacao = 'Opa' //Contexto Léxico 1

function exec() {
    const saudacao = 'Falaaa' // Contexto Léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Sara',
    idade: 1,
    peso: 12,
    endereco: {
        logradouro: 'Rua de casa',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)
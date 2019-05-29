class avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}
class pai extends avo {
    constructor(sobrenome, profissao = 'Dev') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class filho extends pai {
    constructor(){
        super('Sassaki')
    }
}

const Filho = new filho
console.log(Filho)
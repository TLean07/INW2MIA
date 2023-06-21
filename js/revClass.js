class Pessoa{
    constructor(CPF,Nome,anoNascimento){
        this.CPF = CPF;
        this.Nome = Nome;
        this.anoNascimento = anoNascimento;
    }

    mostraIdade(){
        console.log("Idade: "+(2023-this.anoNascimento))
    }
}

//programa principal

const leia = require("prompt-sync")()

let p1 = new Pessoa("000.111.222-33", "Pedro Henrique",2007)
let p2 = new Pessoa("444.555.666-77", "Leandro",2007)

console.log(p1)
p1.mostraIdade()
p2.mostraIdade( )
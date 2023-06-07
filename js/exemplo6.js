const leia = require("prompt-sync")()

let aluno = leia("Digite o nome do aluno: ")
let nota = parseInt(leia("Digite a nota do Aluno: "))
let tipo = leia("Digite O para Aluno e A para Aluna: ")

if(tipo == "O"){
    if (nota >= 6){
        console.log("Olá aluno " +aluno+" você foi aprovado");
    }
    else {
        console.log("Olá aluno " +aluno+" você foi reprovado");
    }
}

if(tipo == "A"){
    if (nota >= 6){
        console.log("Olá aluna " +aluno+" você foi aprovada");
    }
    else {
        console.log("Olá aluna " +aluno+" você foi reprovada");
    }
}
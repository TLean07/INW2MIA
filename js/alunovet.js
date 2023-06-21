const leia = require("prompt-sync")()

let alunos = ["MARCOS", "PAULO", "MARIA"]
let matriculas = ["MAT01","MAT02", "MAT03"]
let notas = [0,0,0]
let situacao

for(let i=0; i<3; i++){
    notas[i] = parseInt(leia("Digite a nota do aluno : "))
}
console.log("MAT\tALUNO\tNOTA")
for(let i=0; i<alunos.length; i++){
    if(notas[i]>=5){
        situacao='Aprovado'
    }
    else {
        situacao = 'Rec'
    }
    console.log(matriculas[i]+'\t'+alunos[i]+"\t"+notas[i]+'\t'+situacao)
}
console.log("Mudando a nota do aluno")
let auxMat = leia("Digite a matricula do aluno : ")
for(let i=0; i<alunos.length; i++){
    if(auxMat == matriculas[i]){
        console.log("Aluno escolhido :"+alunos[i])
        notas[i] = parseInt(leia("Digite a nova nota do aluno :"))
    }
}
console.log("MAT\tALUNO\tNOTA")
for(let i=0; i<alunos.length; i++){
    if(notas[i]>=5){
        situacao='Aprovado'
    }
    else {
        situacao = 'Rec'
    }
    console.log(matriculas[i]+'\t'+alunos[i]+"\t"+notas[i]+'\t'+situacao)
}

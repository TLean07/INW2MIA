const leia = require("prompt-sync")()

let aluno1
let aluno2
let nota1
let nota2

aluno1 = leia("Nome do aluno 1 : ")
nota1 = parseInt(leia("Nota do aluno 1 : "))
aluno2 = leia("Nome do aluno 2 : ")
nota2 = parseInt(leia("Nota do aluno 2 : "))


if(nota1>=5){
    console.log("oi "+aluno1+" aprovado")
}
else
{
    console.log("oi "+aluno1+" Rec")
}

if(nota2>=5){
    console.log("oi "+aluno2+" aprovado")
}
else
{
    console.log("oi "+aluno2+" Rec")
}
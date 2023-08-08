const leia = require("prompt-sync")()

let Matricula = ["M01","M02","M03","M04"]
let Nome = ["Paulo","Maria","Pedro","Marcos"]
let Nota = [0,0,0,0]

//Lista de dados na tela

console.log("Matricula\tNome\tNota")

for (let i = 0; i < Matricula.length; i++) {
    console.log(Matricula[i]+"\t\t"+Nome[i].toUpperCase()+"\t"+Nota[i])
}

auxmat=leia('Digite a Matrícula do Aluno : ').toUpperCase()
console.log(auxmat)

for (let i = 0; i < Matricula.length; i++){
    if (auxmat==Matricula[i]){
        indice=i
    }
}
if (indice!=-1){
    console.log("O aluno ecolhido foi : "+Nome[indice])
}
//Cadastra uma nota de um aluno especifico


 
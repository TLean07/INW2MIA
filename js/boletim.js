const leia = require("prompt-sync")();

let alunos = ["","","",""];
let notas = [0,0,0,0];

for (let x = 0; x < alunos.length; x++){
    alunos[x] = leia("Digite o nome do aluno(a): ");
    notas[x] = parseInt(leiaI("Digite a Nota do aluno: "));
}

console.log("Boletim");
console.log("Nome\tnota\tsituação");
for (let x = 0; x < alunos.length; x++){
    if(notas[x] < 5){
        situação = 'REC'
    }
    else {
        situação = 'APROVADO'
    }
    console.log(alunos[x]+'\t'+notas[x])
}
//CLASSES
class Conta{
    constructor(numero,cpf,saldo,ativo){
        this.numero = numero;
        this.cpf = cpf;
        this.saldo= saldo;
        this.ativo=ativo
    }

    ativar(){
        this.ativo = true
    }

    credito(valor){
        if (this.ativo){
            if(valor<0){
                console.log("Impossivel realizar valor negativo...")
            }
            else if(valor == 0){
                console.log("Impossivel realizar valor zerado...")
            }
            else {
                this.saldo = this.saldo + valor
            }                        
        }
        else {
            console.log("Conta está inativa...")
        }   
    }

    debito(valor){
        if (this.ativo){
            if(valor<0){
                console.log("Impossivel realizar valor negativo...")
            }
            else if(valor == 0){
                console.log("Impossivel realizar valor zerado...")
            }
            else if(this.saldo<valor){
                console.log("Saldo insuficiente...")
            }
            else {
                this.saldo = this.saldo - valor
            }                        
        }
        else {
            console.log("Conta está inativa...")
        }   
    }

}

class Poupanca extends Conta{
    constructor(numero,cpf,saldo,ativo,diaAniversarioPoupanca){
        super(numero,cpf,saldo,ativo);
        this.diaAniversarioPoupanca = diaAniversarioPoupanca
    }

    correcao(dia){
        if(dia == this.diaAniversarioPoupanca){
            this.credito(this.saldo*0.05)
        }
        console.log("Saldo atual conta R$ : "+this.saldo)
    }
}

class Corrente extends Conta {
    constructor(numero,cpf,saldo,ativo,contadorTalao){
        super(numero,cpf,saldo,ativo);
        this.contadorTalao = contadorTalao
    }

    pedirTalao(qtde){
        if(qtde>this.contadorTalao){
            console.log("Impossivel realizar, quantidade indisponivel...")
        }
        else if ((qtde*30)>this.saldo){
            console.log("Impossivel realizar, saldo indisponivel...")
        }
        else {
            console.log("Emitindo talão....")
            this.contadorTalao = this.contadorTalao - qtde
            this.debito(qtde*30)
        }
        console.log("Talões atuais disponiveis "+this.contadorTalao)
        console.log("Saldo atual conta R$ : "+this.saldo)
    }
}


class Especial extends Conta {
    constructor(numero, cpf, saldo, ativo, limite){
        super(numero,cpf,saldo,ativo);
        this.limite = limite
    }
    
    usarLimite(valor){
        if(valor>this.limite){
            console.log("impossivel realizar, limite indisponivel....")
        }
        else {
            this.limite = this.limite - valor
            this.credito(valor)
        }
        console.log("Limite atual : "+this.limite)
        console.log("Saldo atual conta R$ : "+this.saldo)
    }

}


//PROGRAMA PRINCIPAL

const leia = require("prompt-sync")()
let op= ""
let opcao = ""
let valor = 0
do {
    console.log("BANK")
    console.log("O BANCO DO 2MIA\n")
    console.log("1 - conta poupança")
    console.log("2 - conta corrente")
    console.log("3 - conta especial")
    console.log("4 - sair")
    op = leia("Digite o numero da sua opção : ")

    if (op == "1"){
        console.log("BANK")
        console.log("O BANCO DO 2MIA\n")
        console.log("CONTA POUPANÇA\n")
        let numero = leia("Digite o numero da conta : ")
        let cpf = leia("Digite o cpf da conta :")
        let diaAniversarioPoupanca = leia("Digite o dia de niver da conta :")
        let cp1 = new Poupanca(numero,cpf,0,false,diaAniversarioPoupanca)
        cp1.ativar()
        for(let x=1; x<=10; x++){
            valor = parseInt(leia("Digite o valor : "))
            opcao = leia("Digite D para debito ou C para Credito :")
            if(opcao == "C"){
                cp1.credito(valor)
            }
            else if (opcao =="D"){
                cp1.debito(valor)
            }
            console.log("Saldo atual da conta : "+cp1.saldo)
        }

        let dia = leia("Digite o DIA de hoje : ")
        cp1.correcao(dia)
        
    }
    else if (op == "2"){
        console.log("BANK")
        console.log("O BANCO DO 2MIA\n")
        console.log("CONTA CORRENTE\n")
        let numero = leia("Digite o numero da conta : ")
        let cpf = leia("Digite o cpf da conta :")
        let cc1 = new Corrente(numero,cpf,0,false,3)
    }
    else if (op=="3"){
        console.log("BANK")
        console.log("O BANCO DO 2MIA\n")
        console.log("CONTA ESPECIAL\n")
        let numero = leia("Digite o numero da conta : ")
        let cpf = leia("Digite o cpf da conta :")
        let ce1 = new Especial(numero,cpf,0,false,1000)
    }
    else if (op=="4"){
        console.log("Saindo do programa...")
    }
    else {
        console.log("Digitação invalida")
    }

} while (op != "4")
console.log("Fim de programa... até breve!")













/*
let op = ""
let valor = 0
let tipo=""

console.log("1 - conta poupança")
console.log("2 - conta corrente")
console.log("3 - conta especial")
tipo = leia("Digite o numero do tipo de conta a ser aberta : ")

if (tipo=="1"){
    console.log("CONTA POUPANÇA")
    let numero = parseInt(leia("Digite o numero da conta : "))
    let cpf = leia("Digite o cpf : ")
    let cp1 = new Conta(numero,cpf,0,false)
    c1.ativar()

    for (let x=1; x<=10; x++){
        console.log("Movimento "+x)
        console.log("Saldo da conta R$ : "+cp1.saldo)
        valor = parseInt(leia("Digite o valor : "))
        op = leia("Digite D - débito ou C - crédito : ").toUpperCase()
        if(op=="C"){
            cp1.credito(valor)
        }
        else if (op=="D"){
            cp1.debito(valor)
        }
}
console.log("Saldo final da conta R$ : "+cp1.saldo)

}
else if (tipo=="2"){

}

*/

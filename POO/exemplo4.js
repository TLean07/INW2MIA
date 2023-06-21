class Aviao{
    constructor(ligado, velocidade, modelo){
        this.ligado = ligado;
        this.velocidade = velocidade;
        this.modelo = modelo
    }

    ligar(){
        console.log("Ligando....")
        this.ligado = true
    }

}

//programa principal
let aviaoED = new Aviao(false,0,"Bimotor")
let aviaoTurma = new Aviao(false,0,"747")

aviaoED.ligar()
console.log(aviaoED)

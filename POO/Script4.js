class Aviao{
    constructor(velocidade, velocidademax, peso, ligado){
        this.velocidade = velocidade;
        this.velocidademax = velocidademax;
        this.peso = peso;
        this.ligado = ligado;
    }
    ligar(){
        console.log("ligado")
        this.ligar = true
    }
}

let Aviao1 = new Aviao(false,0,"Bimotor")
let Aviao2 = new Aviao(false,0,"747")

Aviao1.ligar()
console.log(Aviao)

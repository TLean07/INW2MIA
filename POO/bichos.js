class Animal{
    constructor(tipo, porte, femea, nascimento){
        this.tipo = tipo;
        this.porte = porte;
        this.femea = femea;
        this.nascimento = nascimento
    }

    fazerBarulho(){
        console.log("fazendo barulho...")
    }

    retornarIdade(anoAtual){
        return anoAtual - this.nascimento
    }

}

class Gato extends Animal {
    constructor(tipo,raca, cor){
        super(tipo);
        this.raca = raca;
        this.cor = cor
    }

    miar(){
        console.log("miauuuuuu......")
    }
}

class Cachorro extends Animal {
    constructor(tipo,raca,cor){
        super(tipo);
        this.raca = raca;
        this.cor = cor
    }

    latir(){
        console.log("au au au au....")
    }
}

//PROGRAMA PRINCIPAL
let bicho1 = new Animal("mamifero","medio",false,2020)
let frajola = new Gato("felino","sphynx","preto")
let snoop = new Cachorro("canino","beagle","malhado")
//console.log(bicho1)
console.log(bicho1.porte)
bicho1.fazerBarulho()
frajola.fazerBarulho()
frajola.miar()
snoop.latir()
snoop.nascimento = 2021
console.log("A idade é "+snoop.retornarIdade(2023))
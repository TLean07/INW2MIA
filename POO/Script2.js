class Retangulo{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    mortrarArea(){
        console.log("A area é:"+this.altura * this.base)
    }
}

//Programa Principal

let objeto1 = new Retangulo(5,3)
let objeto2 = new Retangulo(4,2)
   
console.log("AREA DOS RETANGULOS")
console.log("Retangulo 1")
objeto1.mostrarArea()
console.log("Retangulo2")
objeto2.mostrarArea()   
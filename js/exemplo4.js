const leia = require("prompt-sync")()

let numero1
let numero2
let soma
let sub
let multi
let div
let numero 

numero1 = parseInt(leia("Coloque o primeiro número aqui: "))
numero2 = parseInt(leia("Coloque o segundo número aqui: "))
numero = leia("Digite um número: ")

soma =  (numero1+numero2)
sub =   (numero1-numero2)
multi = (numero1*numero2)
div =   (numero1/numero2)

console.log("Sua soma é: "+soma)
console.log("Sua subtração é: "+sub)
console.log("Sua multiplicação é: "+multi)
console.log("Sua divisão é: "+div)
console.log("Sua raiz é: "+(Math.sqrt(numero)))
console.log("Numero ao quadrado: "+(Math.pow(numero,2)))
console.log("Numero ao cubo: "+(Math.pow(numero,3))) 

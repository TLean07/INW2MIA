const leia = require("prompt-sync")()

let valor1 = 0
let valor2 = 0

valor1 =parseInt(leia("Digite o valor 1 : "))
valor2 =parseInt(leia("Digite o valor 2 : "))
console.log("A soma é igual "+(valor1+valor2))


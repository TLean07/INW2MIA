const leia = require("prompt-sync")()

let limite = parseInt(leia("Digite um numero de vezes: "))

for(let x=1; x<=limite; x++){
     if((x%2)==0){
        console.log(x+" - par")
     }
     else {
        console.log(x+" - impar")
     }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
}
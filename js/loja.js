const leia = require("prompt-sync")()

let codigos = ["COD01","COD002","COD003","COD004","COD005"]
let produtos = ["Teclado","Mouse","Monitor","Cadeira","CPUGAME"]
let valor = [20,10,150,700,800]
let estoque = [0,0,0,0,0]
let vendas = [0,0,0,0,0]

console.log("COD\t\tProduto\t\tValor\t\tEstoque")
console.log("-------------------------------------")
for(let i=0; i<codigos.length; i++){
    console.log(codigos[i]+'\t\t'+produtos[i]+'\t\t'+valor[i]+'\t\t'+estoque[i])
}
console.log("-------------------------------------")

console.log("Cadastramento de estoque")
for(let i=0; i<codigos.length; i++){
    console.log(codigos[i]+' - '+produtos[i])
    estoque[i] = parseInt(leia("Digite o Valor do estoque: "))
}

console.log("COD\t\tProduto\t\tValor\t\tEstoque")
console.log("-------------------------------------")
for(let i=0; i<codigos.length; i++){
    console.log(codigos[i]+'\t\t'+produtos[i]+'\t\t'+valor[i]+'\t\t'+estoque[i])
}
console.log("-------------------------------------")

console.log("Processo de Venda")
let auxCod = leia("Digite o codigo do Produto que deseja comprar : ").toLocaleUpperCase
for(let i=0; i<codigos.length; i++){
    if(auxCod == codigos[i]){
        console.log(codigos[i]+' - '+produtos[i]+' estoque : '+estoque[i])
        vendas[i] = parent(leia("Digite a quantidade que deseja comprar : "))
        console.log("Total da Compra : "+(vendas[i]*valor[i]))
        estoque[i] = estoque[i]-vendas[i]
    }
}
console.log("COD\t\tProduto\t\tValor\t\tEstoque")
console.log("-------------------------------------")
for(let i=0; i<codigos.length; i++){
    console.log(codigos[i]+'\t\t'+produtos[i]+'\t\t'+valor[i]+'\t\t'+estoque[i])
}
console.log("-------------------------------------")


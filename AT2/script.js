const leia = require("prompt-sync")()

let cod = ["COD01", "COD02", "COD03", "COD04", "COD05", "COD06", "COD07", "COD08", "COD09", "COD10"];
let descricao = ["Mapeamento de Área com Drone e VR           ","Monitoramento Ambiental em Realidade Virtual","Educação Ambiental Interativa               ","Passeio Virtual por Ecossistemas            ","Realidade Virtual para Proteção de Nascentes","Reciclagem Virtual de Resíduos              ","VR para Observação de Fauna Silvestre       ","Tour Virtual por Reservas Naturais          ","VR para Limpeza de Praias Virtuais           ","Sensibilização Ambiental em Realidade Virtual"];
let valor = [25.00, 20.00, 15.00, 12.00, 18.00, 8.00, 30.00, 22.00, 5.00, 10.00]
let movimento = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let estoque = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let opcaoMeuPrincipal=""
let auxCod=""
let posicao = -1

//programa principal
while(opcaoMeuPrincipal != "2"){
    console.log("Loja xxx\n\n")
    console.log("Menu Pincipal")
    console.log("1 - Opçôes")
    console.log("2 - Sair")
    opcaoMeuPrincipal = leia("Digite o número da sua opção : ")
    if (opcaoMeuPrincipal =="1"){
        opcaoSubMenu=""
        //Sub-Menu referente as opções
        while(opcaoSubMenu !="6"){
            console.log("Sub-Menu")
            console.log("1 - Mostrar os registros")
            console.log("2 - Alterar os registros")
            console.log("3 - Cadastrar os registros")
            console.log("4 - Excluir um registro")
            console.log("5 - Carrinho de Compras")
            console.log("6 - Sair")
            opcaoSubMenu = leia("Digite o numero da sua opção : ")
            if(opcaoSubMenu=="1"){
                console.log("COD\tDESCRICAO\tVALOR\tESTOQUE")
                for(let x = 0; x<cod.length ; x++){
                    console.log(cod[x]+"\t"+descricao[x]+"\t"+valor[x]+"\t"+estoque[x])
                }
            }
            else if(opcaoSubMenu=="2"){
                auxCod = leia("Digite o Codigodo produto que deseja alterar : ")
                for (let x= 0; x<cod.length; x++){
                    if(auxCod==cod[x]){
                        posicao = x
                    }
                }
                if(posicao == -1){
                    console.log("Produto não encontrado")
                }
                else {
                    cod[posicao]=leia("Digite o novo codigo : ");
                    descricao[posicao]=leia("Digite a nova descrição : ");
                    valor[descricao]=parseFloat(leia("Digite o novo preço : "));
                    estoque[descricao]=parseInt(leia("Digite o novo preço : "));
                }
            }
        }
    }
}

//fim do programa
console.log("Até breve")
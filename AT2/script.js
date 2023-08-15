const leia = require("prompt-sync")()

let cod = ["COD01", "COD02", "COD03", "COD04", "COD05", "COD06", "COD07", "COD08", "COD09", "COD10"];
let descricao = ["Mapeamento de Área com Drone e VR           ","Monitoramento Ambiental em Realidade Virtual","Educação Ambiental Interativa               ","Passeio Virtual por Ecossistemas            ","Realidade Virtual para Proteção de Nascentes","Reciclagem Virtual de Resíduos              ","VR para Observação de Fauna Silvestre       ","Tour Virtual por Reservas Naturais          ","VR para Limpeza de Praias Virtuais           ","Sensibilização Ambiental em Realidade Virtual"];
let valor = [25.00, 20.00, 15.00, 12.00, 18.00, 8.00, 30.00, 22.00, 5.00, 10.00]
let estoque = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let movimento = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let opcaoMenuPrincipal=""
let opcaoSubMenu=""
let auxCod=""
let posicao = -1
let carrinho = []
let totalDoacao = 0

// Função para mostrar os registros
function mostrarRegistros() {
    console.log("COD\tDESCRICAO\t\t\t\t\t\tVALOR\tESTOQUE");
    for (let x = 0; x < cod.length; x++) {
        console.log(cod[x] + "\t" + descricao[x] + "\t" + valor[x] + "\t" + estoque[x]);
    }
}

// Função para adicionar serviço ao carrinho
function adicionarAoCarrinho(posicao) {
    if (carrinho.length < 10 && estoque[posicao] > 0) {
        carrinho.push(posicao);
        estoque[posicao]--;
        movimento[posicao]++;
        totalDoacao += valor[posicao];
        console.log("Produto adicionado ao carrinho.");
    } else {
        console.log("Não foi possível adicionar o produto ao carrinho.");
    }
}

//programa principal
while(opcaoMenuPrincipal != "2"){
    console.log("LOJA XXX\n\n")
    console.log("MENU PRINCIPAL")    
    console.log("1 - Opções")
    console.log("2 - Sair")
    opcaoMenuPrincipal = leia("Digite o numero da sua opção : ")
    if (opcaoMenuPrincipal =="1"){
        opcaoSubMenu=""
        //SUB-MENU REFERENTE AS OPÇÕES
        while(opcaoSubMenu != "6"){
            console.log("SUB-MENU")
            console.log("1 - MOSTRAR OS REGISTROS")
            console.log("2 - ALTERAR OS REGISTROS")
            console.log("3 - CADASTRAR OS REGISTROS")
            console.log("4 - EXCLUIR UM REGISTRO")
            console.log("5 - CARRINHO DE COMPRAS")
            console.log("6 - SAIR")
            opcaoSubMenu = leia("Digite o numero da sua opção : ")
            if(opcaoSubMenu=="1"){
                console.log("COD\tDESCRICAO\tVALOR\tESTOQUE")
                for(let x = 0; x<cod.length ; x++){
                    console.log(cod[x]+"\t"+descricao[x]+"\t\t"+valor[x]+"\t"+estoque[x])
                }
            }
            else if(opcaoSubMenu=="2"){
                auxCod = leia("Digite o codigo do produto que deseja alterar : ").toUpperCase()
                for(let x =0; x<cod.length; x++){
                    if(auxCod==cod[x]){
                        posicao = x
                    }                    
                }
                if(posicao == -1){
                    console.log("Produto não encontrado...")
                }
                else {
                    cod[posicao]=leia("Digite o novo codigo : ")
                    descricao[posicao]=leia("Digite a nova descrição: ")
                    valor[posicao]=parseFloat(leia("Digite o novo preço: "))
                    estoque[posicao]=parseInt(leia("Digite o novo estoque : "))
                }
            } else if (opcaoSubMenu == "3") {
                // Adicionar lógica para cadastrar registros
            } else if (opcaoSubMenu == "4") {
                // Adicionar lógica para excluir um registro
            } else if (opcaoSubMenu == "5") {
                // Carrinho de compras
                console.log("CARRINHO DE COMPRAS");
                for (let i = 0; i < carrinho.length; i++) {
                    console.log(cod[carrinho[i]] + "\t" + descricao[carrinho[i]] + "\t" + valor[carrinho[i]]);
                }
                console.log("Total de doação: R$ " + totalDoacao.toFixed(2));    
            }
            
        }      
        
    }
}

//fim de programa
console.log("Até breve")
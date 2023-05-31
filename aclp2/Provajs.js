class Produto {
  constructor(id, descricao, ativo, estoque, preco, atributo1, atributo2, atributo3, atributo4, atributo5) {
    this.id = id;
    this.descricao = descricao;
    this.ativo = ativo;
    this.estoque = estoque;
    this.preco = preco;
    this.atributo1 = atributo1;
    this.atributo2 = atributo2;
    this.atributo3 = atributo3;
    this.atributo4 = atributo4;
    this.atributo5 = atributo5;
  }
  ativar() {
    this.ativo = true;
    console.log("Produto ativado.");
  }
  retirarEstoque(quantidade) {
    if (quantidade <= this.estoque) {
      this.estoque -= quantidade;
      console.log(`${quantidade} unidades retiradas do estoque.`);
    } else {
      console.log("Estoque insuficiente.");
    }
  }
  incluirEstoque(quantidade) {
    const limiteEstoque = 10;
    const estoqueAnterior = this.estoque;
    if (this.estoque + quantidade <= limiteEstoque) {
      this.estoque += quantidade;
      console.log(`${quantidade} unidades adicionadas ao estoque.`);
    } else {
      this.estoque = limiteEstoque;
      console.log(`Estoque atingiu o limite máximo de ${limiteEstoque} unidades.`);
    }
    const valorTotal = (this.estoque - estoqueAnterior) * this.preco;
    console.log(`Valor total desta compra: R$ ${valorTotal}`);
  }
}
// Exemplo de uso da classe Produto
const produtos = [
  new Produto(1, "Capinha", true, 10, 50, "Pelicula", "Carregador Portátil", "Fone de Ouvido Bluetooth", "Suporte Veicular"),
  new Produto(2, "Protetor de Tela", true, 10, 30, "Capa à Prova d'Água", "Carregador sem Fio", "PopSocket", "Adaptador de Tomada Universal"),
  new Produto(3, "Power Bank", true, 10, 80, "Bastão de Selfie", "Película de Privacidade", "Cartão de Memória", "Cabo USB"),
  new Produto(4, "Carregador Rápido", true, 10, 60, "Dock Station", "Kit Limpeza", "Mini Ventilador USB", "Headset Gamer"),
  new Produto(5, "Suporte para Celular", true, 10, 20, "Tripé Flexível", "Carregador Veicular", "PopGrip", "Teclado Bluetooth")
];
for (const produto of produtos) {
  console.log(`Dados do produto:`);
  console.log(produto);
  console.log("---------------------");
}
// Movimentos de compra
const movimentosDeCompra = [2, 3, 1, 4, 2];
for (let i = 0; i < movimentosDeCompra.length; i++) {
  const quantidadeCompra = movimentosDeCompra[i];
  const produto = produtos[i % produtos.length];
  console.log(`Movimento de compra ${i + 1}:`);
  console.log(`Dados do produto:`, produto);
  console.log(`Saldo atual do estoque: ${produto.estoque}`);
  produto.retirarEstoque(quantidadeCompra);
  console.log("---------------------");
}
// Solicitação de incluir Estoque conforme necessidade final
const estoqueFinal = 5;
for (const produto of produtos) {
  console.log(`Solicitação de incluir Estoque até o limite de 10 unidades.`);
  console.log(`Dados do produto:`, produto);
  console.log(`Saldo atual do estoque: ${produto.estoque}`);
  produto.incluirEstoque(estoqueFinal);
  console.log("---------------------");
}
for (const produto of produtos) {
  console.log(`Dados finais do produto:`);
  console.log(produto);
  console.log("---------------------");
}

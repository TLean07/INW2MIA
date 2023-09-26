const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/loja', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 20000,
});

const produtoSchema = new mongoose.Schema({
  codigo: String,
  descricao: String,
  valor: Number,
  estoque: Number,
});

const Produtos = mongoose.model('Produtos', produtoSchema);

const clientesSchema = new mongoose.Schema({
  numero: String,
  nome: String,
  email: String,
});

const Clientes = mongoose.model('Clientes', clientesSchema);

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const produtos = [];
const clientes = [];

function cadastrarProduto() {
  rl.question('Informe o código do produto: ', (codigo) => {
    rl.question('Informe a descrição do produto: ', (descricao) => {
      rl.question('Informe o valor do produto: ', (valor) => {
        rl.question('Informe o estoque do produto: ', (estoque) => {
          // Valide se os valores de valor e estoque são numéricos
          if (isNaN(parseFloat(valor)) || isNaN(parseInt(estoque))) {
            console.error('Valores de valor ou estoque não são numéricos. Produto não cadastrado.');
            rl.close();
          } else {
            const produto = new Produtos({ codigo, descricao, valor: parseFloat(valor), estoque: parseInt(estoque) });
            produto.save()
              .then(() => {
                console.log('Produto cadastrado com sucesso!');
                produtos.push(produto);
                rl.close();
              })
              .catch((err) => {
                console.error('Erro ao salvar o produto: ', err);
                rl.close();
              });
          }
        });
      });
    });
  });
}
function cadastrarCliente() {
  rl.question('Informe o número do cliente: ', (numero) => {
    rl.question('Informe o nome do cliente: ', (nome) => {
      rl.question('Informe o email do cliente: ', (email) => {
        const cliente = new Clientes({ numero, nome, email });
        cliente.save()
          .then(() => {
            console.log('Cliente cadastrado com sucesso!');
            clientes.push(cliente);
            rl.close();
          })
          .catch((err) => {
            console.error('Erro ao salvar o cliente: ', err);
            rl.close();
          });
      });
    });
  });
}
function listarProdutos() {
    Produtos.find({})
      .then((produtosEncontrados) => {
        console.log('Lista de Produtos:');
        produtosEncontrados.forEach((produto) => {
          console.log(`Código: ${produto.codigo}, Descrição: ${produto.descricao}, Valor: ${produto.valor}, Estoque: ${produto.estoque}`);
        });
        rl.close();
      })
      .catch((err) => {
        console.error('Erro ao listar produtos: ', err);
        rl.close();
      });
  }
  
  function listarClientes() {
    Clientes.find({})
      .then((clientesEncontrados) => {
        console.log('Lista de Clientes:');
        clientesEncontrados.forEach((cliente) => {
          console.log(`Número: ${cliente.numero}, Nome: ${cliente.nome}, Email: ${cliente.email}`);
        });
        rl.close();
      })
      .catch((err) => {
        console.error('Erro ao listar clientes: ', err);
        rl.close();
      });
  }  
  function menu() {
    console.log('Selecione uma opção:');
    console.log('1 - Cadastrar Produto');
    console.log('2 - Cadastrar Cliente');
    console.log('3 - Listar Produtos');
    console.log('4 - Listar Clientes');
    console.log('0 - Sair');
  
    rl.question('Opção: ', (opcao) => {
      switch (opcao) {
        case '1':
          cadastrarProduto();
          break;
        case '2':
          cadastrarCliente();
          break;
        case '3':
          listarProdutos(); // Chame a função de listar produtos
          break;
        case '4':
          listarClientes(); // Chame a função de listar clientes
          break;
        case '0':
          rl.close();
          mongoose.connection.close();
          break;
        default:
          console.log('Opção inválida');
          menu();
      }
    });
  }  
  menu();
  class Produto {
    constructor(cod, descricao, valor, estoque) {
      this.cod = cod;
      this.descricao = descricao;
      this.valor = valor;
      this.estoque = estoque;
    }
  }
  class Cliente {
    constructor(numero, nome, email) {
      this.numero = numero;
      this.nome = nome;
      this.email = email;
    }
  }
const mongoose = require('mongoose');
const fs = require('fs');
const csv = require('csv-parser');

//conectar o banco de dados
mongoose.connect('mongodb://127.0.0.1:27017/loja', {
   useNewUrlParser : true,
   useUnifiedTopology : true,
   serverSelectionTimeoutMS : 20000
})

const produtoSchema = new mongoose.Schema({
    codigo : String,
    descricao : String,
    valor : Number,
    estoque : Number
})
const Produtos = mongoose.model('Produtos', produtoSchema);
function lerCSVSalvarMongo(){
    const resultados = []
    fs.createReadStream('base.csv')
    .pipe(csv())
    .on('data', (dados)=>{
        resultados.push(dados);
    })
    .on('end', ()=>{
        Produtos.insertMany(resultados)
        .then(()=>{
            console.log('Dados importados com sucesso');
            mongoose.connection.close();
        })
        .catch((error)=>{
            console.error('Erro ao importar os dados : ', error)
            mongoose.connection.close();
        })
    })
}
lerCSVSalvarMongo();


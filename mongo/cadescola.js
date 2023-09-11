 // configura a conexão com o mongodb e o banco de dados

 const mongoose = require('mongoose');

 mongoose.connect('mongodb://127.0.0.1:27017/escola',
 {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    serverSelectionTimeoutMS: 20000
 })

 const db = mongoose.connection;

 db.on('error ', console.error.bind(console, 'connection error : '));

 db.once('open', function(){
    console.log("Estamos conectados ao mongoDB");
 })
 
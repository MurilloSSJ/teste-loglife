const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const db = require('./dataBase/db')
const clientRouter = require('./routes/clients')
const cors = require('cors')
//Configurações
    //bodyParser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    //DataBase
    mongoose.connect(db.mongoURI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("Conectado ao DB")
    })
    //CORS
    app.use((req, res, next) => {
        //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
        res.header("Access-Control-Allow-Origin", "*");
        //Quais são os métodos que a conexão pode realizar na API
        res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
        app.use(cors());
        next();
    });
//Rotas
app.use('/clients',clientRouter)


app.listen(PORT,()=>{
    console.log('Servidor ativo')
})
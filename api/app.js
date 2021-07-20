const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const db = require('./dataBase/db')

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


app.listen(PORT,()=>{
    console.log('Servidor ativo')
})
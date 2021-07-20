const bodyParser = require('body-parser')
const express = require('express')
const app = express()

//Configurações 
    //bodyParser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
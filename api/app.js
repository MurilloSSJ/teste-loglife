const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const db = require('./dataBase/db')
const clientRouter = require('./routes/clients')
const userRouter = require('./routes/users')
const cors = require('cors')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
require('./config/auth')(passport)
//Configurações
    //Sessão
    app.use(session({
        secret:'sessionNode',
        resave:true,
        saveUninitialized:true
    }))

    app.use(passport.initialize())
    app.use(passport.session())

    app.use(flash())

    //Middleware
    app.use((req,res,next)=>{
        res.locals.user = req.user || null
        next()
    })
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
app.use('/user',userRouter)


app.listen(PORT,()=>{
    console.log('Servidor ativo')
})
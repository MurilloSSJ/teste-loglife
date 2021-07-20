    if(process.env.NODE_ENV=='production'){
        module.exports = { mongoURI : 'mongodb+srv://teste-estagio:testeestagio1234@teste-estagio-loglife.4u7dl.mongodb.net/teste-estagio-loglife?retryWrites=true&w=majority'}
    }
    else{
       module.exports = {mongoURI:'mongodb://localhost/teste-estagio-loglife'}
    }
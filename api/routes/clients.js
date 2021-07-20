const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
require('../models/PersonClient')
require('../models/EnterpriseClient')
const personClient = mongoose.model('Cliente')
const enterpriseClient = mongoose.model('Cliente_Juridico')

//Criando as rotas da API
router.get('/search',(req,res)=>{
    personClient.find().then((personsClients)=>{
        enterpriseClient.find().then((enterprisesClients)=>{
            res.send({personClient:personsClients,enterpriseClient:enterprisesClients})
        })
    })
    
})
router.post('/add',(req,res)=>{
    if(req.body.typeClient=='clientPerson'){
        const newClient = {
            situation: req.body.situation,
            name:req.body.name,
            lastName:req.body.lastName,
            cpf:req.body.cpfcnpj,
            email:req.body.email,
            phone:req.body.phone,
            cep:req.body.cep,
            street:req.body.street,
            adressNumber:req.body.adress,
            city:req.body.city,
            country:req.body.country,
            openingHours:req.body.opening,
            attendanceDay:req.body.attendance,
            vehicles:req.body.vehicles
        }
        new personClient(newClient).save().then(()=>{
            res.redirect('http://localhost:5000/clients/search')
        })
    }else if(req.body.typeClient=='clientEnterprise'){
        const newClient = {
            situation: req.body.situation,
            name:req.body.name,
            socialReason:req.body.lastName,
            cnpj:req.body.cpfcnpj,
            email:req.body.email,
            phone:req.body.phone,
            cep:req.body.cep,
            street:req.body.street,
            adressNumber:req.body.adress,
            city:req.body.city,
            country:req.body.country,
            openingHours:req.body.opening,
            attendanceDay:req.body.attendance,
            vehicles:req.body.vehicles
        }
        new enterpriseClient(newClient).save().then(()=>{
            console.log('salvo com sucesso')
        })
    }
})

module.exports = router;
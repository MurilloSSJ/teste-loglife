const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
require('../models/PersonClient')
require('../models/EnterpriseClient')
const personClient = mongoose.model('Cliente')
const enterpriseClient = mongoose.model('Cliente_Juridico')

//Criando as rotas da API
//Obter todos os clients
router.get('/search',(req,res)=>{
    personClient.find().lean().then((personsClients)=>{
        enterpriseClient.find().lean().then((enterprisesClients)=>{
            res.send({personClient:personsClients,enterpriseClient:enterprisesClients})
        })
    })
    
})
//Obter os clients por tipo
router.get('/search/:typeClient',(req,res)=>{
    const typeClient = req.params.typeClient
    if(typeClient == 'clientEnterprise'){
        enterpriseClient.find().lean().then((clients)=>{
            res.send({enterpriseClients:clients})
        })
    }else if(typeClient == 'clientPerson'){
        personClient.find().then((clients)=>{
            res.send({personClients:clients})
        })
    }
})
//Obter apenas um client
router.get('/search/:typeClient/:id',(req,res)=>{
    const typeClient = req.params.typeClient
    if(typeClient == 'clientEnterprise'){
        enterpriseClient.findOne({_id:req.params.id}).lean().then((client)=>{
            res.send({enterpriseClient:client})
        })
    }else if(typeClient == 'clientPerson'){
        personClient.findOne({_id:req.params.id}).lean().then((client)=>{
            res.send({personClient:client})
        })
    }
    
})

//Adicionar novo client
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
            res.redirect('http://localhost:3000/')
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
            res.redirect('http://localhost:3000/')
        })
    }
})
router.delete('/delete/:typeClient/:id',(req,res)=>{
    const typeClient = req.params.typeClient
    const id = req.params.id
    if(typeClient == 'clientEnterprise'){
        enterpriseClient.remove({_id:id}).then(()=>{
            console.log('Removido com sucesso')
        })
        
    }else if(typeClient == 'clientPerson'){
        personClient.remove({_id:id}).then(()=>{
            console.log('success')
            res.redirect('http://localhost:5000/clients/search')
        }).catch((err)=>{
            console.log(err)
        })
    }
})

router.put('/alter/:typeClient/:id',(req,res)=>{
    const typeClient = req.params.typeClient
    const id = req.params.id
    if(typeClient == 'clientEnterprise'){
        enterpriseClient.findOne({_id:id}).then((editClient)=>{
            editClient.situation=req.body.situation,
            editClient.name=req.body.name,
            editClient.socialReason=req.body.lastName,
            editClient.cnpj=req.body.cpfcnpj,
            editClient.email=req.body.email,
            editClient.phone=req.body.phone,
            editClient.cep=req.body.cep,
            editClient.street=req.body.street,
            editClient.adressNumber=req.body.adress,
            editClient.city=req.body.city,
            editClient.country=req.body.country,
            editClient.openingHours=req.body.opening,
            editClient.attendanceDay=req.body.attendance,
            editClient.vehicles=req.body.vehicles
            editClient.save().then(()=>{
                console.log('success')
                res.redirect('http://localhost:5000/clients/search')
            })
        })
        
    }else if(typeClient == 'clientPerson'){
        personClient.findOne({_id:id}).then((editClient)=>{
            editClient.situation=req.body.situation,
            editClient.name=req.body.name,
            editClient.lastName=req.body.lastName,
            editClient.cpf=req.body.cpfcnpj,
            editClient.email=req.body.email,
            editClient.phone=req.body.phone,
            editClient.cep=req.body.cep,
            editClient.street=req.body.street,
            editClient.adressNumber=req.body.adress,
            editClient.city=req.body.city,
            editClient.country=req.body.country,
            editClient.openingHours=req.body.opening,
            editClient.attendanceDay=req.body.attendance,
            editClient.vehicles=req.body.vehicles
            editClient.save().then(()=>{
                console.log('success')
                res.redirect('http://localhost:5000/clients/search')
            })
        })
    }
})

module.exports = router;
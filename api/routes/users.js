const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/User')
const user = mongoose.model('users')
const bcrypt = require('bcryptjs')
const passport = require('passport')

router.post('/new',(req,res)=>{
    const email = req.body.email
    const password = req.body.password
    const newUser = new user({
        email:email,
        password:password
    })

    bcrypt.genSalt(10,(erro,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err){
                res.send({MSG:err})
            }

            newUser.password = hash

            newUser.save().then(()=>{
                console.log('admin registrado com sucesso!')
            })
        })
    })
})

router.post('/auth',(req,res,next)=>{
    passport.authenticate('local',{
        successRedirect:'http://localhost:3000/clients',
        failureRedirect:'http://localhost:3000',
        failureFlash:true
    })(req,res,next)
})

router.get('/verify',(req,res)=>{
    if(req.isAuthenticated()){
        res.send({response:true})
    }else{
        res.send({response:false})
    }
})
module.exports = router
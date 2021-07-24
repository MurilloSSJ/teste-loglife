const local = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

require('../models/User')
const user = mongoose.model('users')

module.exports = (passport)=>{
    passport.use(new local({usernameField:'email',passwordField:'password'},(email,password,done)=>{
        user.findOne({email:email}).lean().then((user)=>{
            if(!user){
                return done(null, false, {message:"error"})
            }

            bcrypt.compare(password,user.password,(err,success)=>{
                if(success){
                    return done(null, user)
                }else{
                    return done(null, false, {message:"error"})
                }
            })
        })
    }))

    passport.serializeUser((user,done)=>{
        done(null,user._id)
    })
    passport.deserializeUser((id,done)=>{
        user.findById(id,(err,user)=>{
            done(err,user)
        })
    })
}
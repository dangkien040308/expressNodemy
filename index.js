const express = require('express')
const app = express()
const router = require('./router')
const PORT = 3001 


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

const check = (req,res,next) => {
    var isLogged = true 
    if (isLogged) {
        next()
    } else {
        res.json('Login failed')
    }
}
const checkIsAdmin = (req,res,next) => {
    var isLogged = true
    var user = {
        role : 'admin'
    }
    if (isLogged && user.role ==='admin') {
        next()
    } else {
        res.json('Login failed')
    }
}
app.get('/', checkIsAdmin ,(req,res,next) => {
    res.json('Login succed')
})
app.use('/admin', check, checkIsAdmin, router )
require("dotenv").config()
const formidable = require('express-formidable')
const express = require('express')
const app = express()
require('./config/database')
const port = process.env.API_PORT

const Student = require("./model/user")
// const user = require("./model/user")



app.post('/home', formidable(), async function (req, res){
console.log(req.fields)
   try{
    let {firstName, lastName, email, password} = req.fields
    if (! (firstName && lastName && email && password)){
        res.status(400).send('check all the details')
    }
    else{
        if ( Student.findOne({email})){
            res.send("user already exist")
        }
        else{
            let Student =new  Student({
                        firstName:firstName,
                        lastName:lastName,
                        email:email,
                        password:password});
                     const newstd= await Student.save()
                     res.status(201)
            res.json(Student)
        }        
    }




   }catch(error){
    res.status(400).send(error)
   }
})
app.listen(port, () => console.log(`project is running at ${port} port`))

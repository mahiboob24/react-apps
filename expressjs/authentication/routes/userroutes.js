
const express= require("express")

const router=express.Router

// app.post('/register', formidable(), function (req, res) {
//     console.log(req.fields)

//     let { firstname, lastname, email, password } = req.fields
//     if (!(firstname && lastname && email && password)) {
//         res.status(400).send('provide all info')
//     }
//     else {
//         if (student.findOne({ email })) {
//             res.send("user alredy exist")
//         } 
//         else {
//             let user = student.create({
//                 firstname: firstname,
//                 lastname: lastname,
//                 email: email,
//                 password: password})
//             res.json(user)
//         }
//     }
// })

router.length('/',(req,res)=>{
    res.json({
        message:"working"
    })
})


module.exports=router
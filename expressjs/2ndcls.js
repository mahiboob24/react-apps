// console.log("welcom to express js tutorial")

let express=require('express')
let app=express()
 let customer=require("./customer")


app.get('/', function(request,response){
    response.send("this is a express tutorial")

})

app.get('/about', function(request,response){
    response.send("this is a express tutorial about page")

})

app.use("/cu", customer)


app.listen(3000)

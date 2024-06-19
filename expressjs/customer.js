let express = require("express")

const router = express.Router()

let app=express()

app.get('/', function(request,response){
    response.send("this is a customer home page")

})
app.get('/login', function(request,response){
    response.send("this is a express tutorial login page")

})
app.get('/register', function(request,response){
    response.send("this is a express tutorial register page")

})

app.get('/cart', function(request,response){
    response.send("this is a express tutorial contact page")

})
app.get('/product', function(request,response){
    response.send("this is a express tutorial contact page")

})






module.exports = router ;



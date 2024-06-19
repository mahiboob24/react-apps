let exp=require('express')

let app=exp()
 app.get('/',function(request,response){
    response.send('welcome to express tutorial')
 })
 app.get('/about',function(request,response){
    response.render('welcome to about')
 })
 app.get('/memo/:name',function(request,response){
    response.send('welcome to '+ request.params.name  +' tutorial')
 })


app.listen(3000)

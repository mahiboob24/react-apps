

let express=require("express")
let uri="mongodb://127.0.0.1:27017/test"
let app=express()
let mongoose=require("mongoose")

mongoose.connect(new_db , function(error , db){
	if (error){
		throw error;
	}
	
	var data = { name : "rishabhio" , age : "25" , mobile : "1234567890" }
	
	db.collection("details").insertOne(data, (err , collection) => {
		if(err) throw err;
		console.log("Record inserted successfully");
		console.log(collection);
	});
});





app.listen(3000)


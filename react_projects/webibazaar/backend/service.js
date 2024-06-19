const express = require("express")
require("dotenv").config()
const app = express()
const bodyparser = require("body-parser")
require("./database/connection")
const cors=require("cors")
const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
}

const authRoute=require("./routes/authRoute")
const productRoute=require("./routes/productRoute")
const orderRoute=require("./routes/orderRoute")
const cartRoute=require("./routes/cartRoute")
const newuserauth=require("./routes/user")


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors(corsOptions))
app.use(bodyparser.json())



app.use("/api/user",authRoute)
app.use("/api/product",productRoute)
app.use("/api/order",orderRoute)
app.use("/api/cart",cartRoute)




// const path = require("path")
// const hbs = require("hbs")



// templates
// const view_path = path.join(__dirname, "../views")
// app.set("view engine", "hbs")
// app.set("views ", view_path)

















// //API's
// app.get("/", function (req, res) {
//   res.render("index")
// })

// app.get("/register",  function (req, res) {
//   res.render("register")
// })


// // api for userdata for post

// app.post("/register", formidable(), )

// // api for login for post

// app.post('/login', formidable(), )

// // api for login for homepage


app.use("/api/newuser", newuserauth);


// // api for product for post

// app.post('/products', formidable(), );



// // api for productdata 

// app.get("/productdata", formidable(), )

// // updatedProduct
// app.put("/updatedproduct/:id",);


// // delete Product

// app.delete("/deleteproduct/:id", );




// // api for order for post
// app.post("/order", );



// app.get("/getorderdata", formidable(), )


// //UPDATE
// app.put("/updateorder/:id", );


// app.delete("/deleteorder/:id",);



// app.post("/ceatecart",  

// );




















// //UPDATE
// app.put("/updatecart/:id", );


// //DELETE
// app.delete("/deletecart/:id", );

// //GET USER CART
// app.get("/singlecart/:userId", async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ userId: req.params.userId });
//     res.status(200).json(cart);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // //GET ALL

// app.get("/allcart", ;

















const port = process.env.PORT
app.listen(port, () => console.log(`server is running at ${port} port`))








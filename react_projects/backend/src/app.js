const express = require("express")
const app = express()
const port = 3000

const path = require("path")
const hbs = require("hbs")
const { json } = require("express")




require("./db/conn")
const reg = require("./models/register")



const static_path = path.join(__dirname, "../public")
const view_path = path.join(__dirname, "../views")

app.set("view engine", "hbs")
app.set("views ", view_path)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(static_path))





app.get("/", function (req, res) {
    res.render("index")
})

app.get("/register", async function (req, res) {
    res.render("register")
})


app.post("/register", async function (req, res) {
    try {
        const password = req.body.password
        const cpassword = req.body.cpassword

        if (password === cpassword)
         {
            const registeremp = new reg(
                {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    cpassword: req.body.cpassword,
                }
            )
         const registerd= await  registeremp.save()
         res.status(201).send(index)
        }
         else {
            res.send("password not matched")
        }
        console.log(req.body.username)
    }
    catch (error) {
        res.status(400).send(error)
    }
})




app.listen(port, () => { console.log(`server running at ${port} port`) })
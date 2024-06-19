const express = require("express")
const formidable = require("express-formidable")
const app = express()

require("./db/conne")

const newdata = require("./model/data")

app.post("/", formidable(), function (req, res) {
    let { username, email, password } = req.fields
    console.log(req.fields)

    if (!(username && email && password )) {
        res.status(400).send("give the all the info")
    }
    else {
        const data = new newdata(
            {
                username: req.fields.username,
                email: req.fields.email,
                password: req.fields.password,
            }
        )
        const datas = data.save()
        res.status(200).send("database  created" +" "+  datas)
    }

})

app.listen(3004)





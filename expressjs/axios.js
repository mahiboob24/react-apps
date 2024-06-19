import axios from 'axios'
import express from 'express'
const app = express()

app.listen(3000)

let url = "https://jsonplaceholder.typicode.com/user"

// retriving data by using axios



// axios.get(url)
//here data is a default in the console ex:status:ok property and similarly message
// .then((res)=>console.log(res.data))  
// .catch((error)=>console.log(error.message))


// i have used Map() to loop each value

// axios.get(url)
//     .then((res) =>
//         res.data.map((user) => console.log(user.name))
//     )
//     .catch((error) => console.log(error.message))


// async and await


async function getdata() {
   try{
    const res = await axios.get(url)
    res.data.forEach((item) => console.log(item.name))
   }
    catch(error) {console.log(error.message)}
}

getdata()











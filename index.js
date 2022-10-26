const express = require('express')
const app = express();
const port = 5000;
const cors = require('cors')

app.use(cors())

app.get('/',(req, res)=>{
    res.send('I am from ecucamb server')
})

app.listen(port, ()=>{
    console.log(`educamb server is running on ${port} `)
})
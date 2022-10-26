const express = require('express')
const app = express();
const port = 5000;
const cors = require('cors')

app.use(cors())

app.get('/',(req, res)=>{
    res.send('Hello world')
})

app.listen(port, ()=>{
    console.log(`educamb server is running on ${port} `)
})
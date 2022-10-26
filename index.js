const express = require('express')
const app = express();
const port = 5000;
const cors = require('cors')

const courses = require('./data/courses.json')

app.use(cors())

app.get('/',(req, res)=>{
    res.send('I am from ecucamb server')
})

app.get('/courses',(req,res)=>{
    res.send(courses)
})
app.get('/courses/:id',(req,res)=>{
    const id = req.params.id ;
    const selectedCourse = courses.find(course => course.id == id)
    res.send(selectedCourse);
})

app.listen(port, ()=>{
    console.log(`educamb server is running on ${port} `)
})
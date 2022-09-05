const express = require('express');
const app = express()
const Tasks = require('./routes/Tasks')

const PORT = 5000


app.use(express.json())


app.get('/',(req,res)=>{
    res.send('Task Manager')
})


app.use('jsonplaceholder.typicode.com/todos/users/:id')



app.listen(PORT,()=>{
    console.log(`Server listening in ${PORT}...`)
})
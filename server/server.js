const express = require('express')
const mongoose = require('mongoose')
const app = express()
 
app.get("/", (req, res) => {
    res.send('Welcome NodeAPI')
})


app.get('/blog', (req,res) => {
    res.send('Connected');
})


mongoose.connect
('mongodb+srv://root:BDKZtiJqShAhNIEs@cluster0.lwluual.mongodb.net/api?retryWrites=true&w=majority&appName=AtlasApp')
.then(()=>{
    console.log('Connected to MongoDB')
    app.listen(5000, ()=> { console.log('Server running on Port:5000')})
}).catch((error)=>{
    console.log(error)
})


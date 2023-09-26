const express = require('express')
const mongoose = require('mongoose')
const app = express()

const Product = require('./model')
 
app.get("/api", (req, res) => {
    res.json({"user": ["one", "two", "three"]})
})


app.get('/blog', (req,res) => {
    res.send('Connected');
})

app.post('/buy', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);

        const newProduct = new Product({
            name: 'Black Adidas Jacket',
            image: '../page/icon/adidas.jpg',
            price: 19.99,
          });
          
          // Save the document to the database
        newProduct.save()
        .then(savedProduct => {
            console.log('Product saved:', savedProduct);
        })
        .catch(error => {
            console.error('Error saving product:', error);
        });
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})


mongoose.connect
('mongodb+srv://root:BDKZtiJqShAhNIEs@cluster0.lwluual.mongodb.net/api?retryWrites=true&w=majority&appName=AtlasApp')
.then(()=>{
    console.log('Connected to MongoDB')
    app.listen(5000, ()=> { console.log('Server running on Port:5000')})
}).catch((error)=>{
    console.log(error)
})


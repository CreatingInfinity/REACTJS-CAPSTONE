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

app.route('/pay')
  .get((req, res) => {
    res.json([
      {
        "name": 'Printed T-shirts',
        "image": 'https://images.pexels.com/photos/2112651/pexels-photo-2112651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        "description": 'To slay even in plain clothing!',
        "price": 19.99
      },
      {
        "name": 'Comfy Clothes',
        "image": 'https://images.pexels.com/photos/3527572/pexels-photo-3527572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        "description": 'Good for outdoors and very vibrant!',
        "price": 10.99
      },
      {
        "name": 'Cute Gown  ',
        "image": 'https://images.pexels.com/photos/3489129/pexels-photo-3489129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        "description": 'Good for outdoors and very vibrant!',
        "price": 10.99
      },
      {
        "name": 'Fine Dress',
        "image": 'https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        "description": 'Good for outdoors and very vibrant!',
        "price": 10.99
      },
      {
        "name": 'Professional Blouse',
        "image": 'https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg?auto=compress&cs=tinysrgb&w=600',
        "description": 'Good for outdoors and very vibrant!',
        "price": 10.99
      }
    ]);
  })
  app.post('/payment' ,async(req, res) => {
    try {
        const productData = new Product(req.body); // Use the new operator
        console.log("Received Product Data:", productData);

        await productData.save();
        
        res.status(201).json(productData);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });




mongoose.connect
('mongodb+srv://root:BDKZtiJqShAhNIEs@cluster0.lwluual.mongodb.net/api?retryWrites=true&w=majority&appName=AtlasApp')
.then(()=>{
    console.log('Connected to MongoDB')
    app.listen(5000, ()=> { console.log('Server running on Port:5000')})
}).catch((error)=>{
    console.log(error)
})


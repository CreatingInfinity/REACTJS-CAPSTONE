import React, { useEffect, useState } from "react"
import bg from "./page/icon/bgp1.webp"
import './page.css'
import { Link } from "react-router-dom";
import axios from "axios";

function Home(){

    const [product, setProducts] = useState([]);

    useEffect(() => {
        document.title = "Merielle";
        fetch("/pay")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    const buyNow = async (productData) => {
        try {
          const completeProductData = {
            name: productData.name,
            image: productData.image,
            description: productData.description,
            price: productData.price
          };
          console.log("Complete Product Data:", completeProductData);
          const response = await axios.post('/payment', completeProductData);
          console.log(response.data);
        } catch (error) {
          console.error('Error posting data:', error);
        }
      };
        
    return (
        <main>
            <div className="flex center">
                <div  className="flex center">
                    <Link to={'/shop'} className="bg">
                        <img className="image-bg" src={bg} alt="#"></img>
                    </Link>
                </div>
            </div>
            <hr className="hr-a"></hr>
            <div className="container box font">
                {product.map((productData, int) => (
                    <div key={int} className="product-box">
                        <img className="product-image" src={(productData.image)} alt="Product"></img>
                        <div className="product-title">{productData.name}</div>
                        <div className="product-price">${productData.price}</div>
                        <div className="product-description">{productData.description}
                    </div>  
                    <input className="product-button" type="submit" onClick={() => buyNow(productData)} value={"Buy Now!"} />
                </div>
                ))}
            </div>
            <Link to={'/shop'} className="product-button width">Shop More!</Link>

        </main>
    )
} 

export default Home;
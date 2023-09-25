import { useEffect } from "react"
import bg from "./icon/bgp1.webp"
import icon1 from "../page/icon/adidas.jpg"
import '../page.css'
import { Link } from "react-router-dom";

function Home(){
    useEffect(()=>{
        document.title = "Merielle";
    })
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
              <div className="product-box">
                    <img className="product-image" src={icon1} alt="Product"></img>
                    <div className="product-title">Black Adidas Jacket</div>
                    <div className="product-price">$19.99</div>
                    <div className="product-description">
                        Perfect Coat for summer season!
                    </div>
                    <Link to={'/buy'} className="product-button">Buy Here</Link>
                </div>
                
            </div>
        </main>
    )
} 

export default Home;
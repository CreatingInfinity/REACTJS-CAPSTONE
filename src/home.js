import { useEffect } from "react"
import bg from "./page/icon/bgp1.webp"
import './page.css'
import { Link } from "react-router-dom";
import Shop from "./buy"

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
            <Shop />

            <Link to={'/buy'} className="product-button width">Shop More!</Link>

        </main>
    )
} 

export default Home;
import { useEffect } from "react"
import bg from "./icon/bgp1.webp"
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
                    <Link to={'/shop?'} className="bg">
                        <img className="image-bg" src={bg} alt="#"></img>
                    </Link>
                </div>
            </div>
            <hr className="hr-a"></hr>
        </main>
    )
} 

export default Home;
import icon1 from "./page/icon/adidas.jpg"
import icon2 from "./page/icon/maletop.jpg"
import icon3 from "./page/icon/menhood.jpg"
import icon4 from "./page/icon/menjap.jpg"
import './page.css'
import { Link } from "react-router-dom";

function Shop(){
    return(
        <main>
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
                <div className="product-box">
                    <img className="product-image" src={icon2} alt="Product"></img>
                    <div className="product-title">Men Summer Polo</div>
                    <div className="product-price">$20.99</div>
                    <div className="product-description">
                        Look great even in the summer heat!
                    </div>
                    <Link to={'/buy'} className="product-button">Buy Here</Link>
                </div>
                <div className="product-box">
                    <img className="product-image" src={icon3} alt="Product"></img>
                    <div className="product-title">Purple Hoodie</div>
                    <div className="product-price">$29.99</div>
                    <div className="product-description">
                        Vibe with your mood and with your friend            
                    </div>
                    <Link to={'/buy'} className="product-button">Buy Here</Link>
                </div>
                <div className="product-box">
                    <img className="product-image" src={icon4} alt="Product"></img>
                    <div className="product-title">コレワ Shirt</div>
                    <div className="product-price">$39.99</div>
                    <div className="product-description">
                        Be culturally cool even in japan!
                    </div>
                    <Link to={'/buy'} className="product-button">Buy Here</Link>
                </div>
                <div className="product-box">
                    <img className="product-image" src={icon2} alt="Product"></img>
                    <div className="product-title">Black Adidas Jacket</div>
                    <div className="product-price">$19.99</div>
                    <div className="product-description">
                        Perfect Coat for summer season!
                    </div>
                    <Link to={'/buy'} className="product-button">Buy Here</Link>
                </div>
                <div className="product-box">
                    <img className="product-image" src={icon3} alt="Product"></img>
                    <div className="product-title">Black Adidas Jacket</div>
                    <div className="product-price">$19.99</div>
                    <div className="product-description">
                        Perfect Coat for summer season!
                    </div>
                    <Link to={'/buy'} className="product-button">Buy Here</Link>
                </div>
                <div className="product-box">
                    <img className="product-image" src={icon1} alt="Product"></img>
                    <div className="product-title">Black Adidas Jacket</div>
                    <div className="product-price">$19.99</div>
                    <div className="product-description">
                        Perfect Coat for summer season!
                    </div>
                    <Link to={'/buy'} className="product-button">Buy Here</Link>
                </div>
                <div className="product-box">
                    <img className="product-image" src={icon2} alt="Product"></img>
                    <div className="product-title">Black Adidas Jacket</div>
                    <div className="product-price">$19.99</div>
                    <div className="product-description">
                        Perfect Coat for summer season!
                    </div>
                    <Link to={'/buy'} className="product-button">Buy Here</Link>
                </div>
                <div className="product-box">
                    <img className="product-image" src={icon4} alt="Product"></img>
                    <div className="product-title">Black Adidas Jacket</div>
                    <div className="product-price">$19.99</div>
                    <div className="product-description">
                        Perfect Coat for summer season!
                    </div>
                    <Link to={'/buy'} className="product-button">Buy Here</Link>
                </div>
                <div className="product-box">
                    <img className="product-image" src={icon3} alt="Product"></img>
                    <div className="product-title">Black Adidas Jacket</div>
                    <div className="product-price">$19.99</div>
                    <div className="product-description">
                        Perfect Coat for summer season!
                    </div>
                    <Link to={'/buy'} className="product-button">Buy Here</Link>
                </div>
                <div className="product-box">
                    <img className="product-image" src={icon2} alt="Product"></img>
                    <div className="product-title">Black Adidas Jacket</div>
                    <div className="product-price">$19.99</div>
                    <div className="product-description">
                        Perfect Coat for summer season!
                    </div>
                    <Link to={'/buy'} className="product-button">Buy Here</Link>
                </div>
                <div className="product-box">
                    <img className="product-image" src={icon3} alt="Product"></img>
                    <div className="product-title">Black Adidas Jacket</div>
                    <div className="product-price">$19.99</div>
                    <div className="product-description">
                        Perfect Coat for summer season!
                    </div>
                    <Link to={'/buy'} className="product-button">Buy Here</Link>
                </div>
                <div className="product-box">
                    <img className="product-image" src={icon1} alt="Product"></img>
                    <div className="product-title">Black Adidas Jacket</div>
                    <div className="product-price">$19.99</div>
                    <div className="product-description">
                        Perfect Coat for summer season!
                    </div>
                    <Link to={'/buy'} className="product-button">Buy Here</Link>
                </div>
                <div className="product-box">
                    <img className="product-image" src={icon2} alt="Product"></img>
                    <div className="product-title">Black Adidas Jacket</div>
                    <div className="product-price">$19.99</div>
                    <div className="product-description">
                        Perfect Coat for summer season!
                    </div>
                    <Link to={'/buy'} className="product-button">Buy Here</Link>
                </div>
                <div className="product-box">
                    <img className="product-image" src={icon2} alt="Product"></img>
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
export default Shop;
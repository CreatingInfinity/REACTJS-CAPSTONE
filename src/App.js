import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewRouter from "./router/route";
import './page.css'

function App() {
  
  const [serverData, setServerData] = useState([{}])

  useEffect(()=> {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setServerData(data)
      }
    )
  }, [])

  return (
    <body>
      <div className="App-header">
        <div>
          <div className="flex center">
            <Link className="a font title-con" to={'/'}>Meriella</Link>
          </div>
          <hr className="hr"></hr>
          <div className="a-turner flex center">
            <Link className="a font">
            <span>Categories</span>
            </Link>
            <Link className="a font" to={'/trend'} >Trending</Link>
            <Link className="a font" to={'/men'}>Men's</Link>
            <Link className="a font" to={'/women'}>Women's</Link>
            <Link className="a font" to={'/kids'}>Kid's</Link>
            <NewRouter />
          </div>
        </div>
      </div>
    </body>
  );
}


export default App;

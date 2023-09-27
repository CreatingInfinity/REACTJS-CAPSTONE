import React from "react";
import { Link } from "react-router-dom";
import NewRouter from "./router/route";
import './page.css'

function App() {
  

  return (
      <section>
          <div className="App-header">
            <div>
              <div className="flex center">
                <Link className="title-con" to={'/'}>Meriella</Link>
              </div>
              <hr className="hr"></hr>
            </div>
          </div>
          <NewRouter />
      </section>
  );
}


export default App;

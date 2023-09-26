
import { Route, Routes } from "react-router-dom";
import Buy from "../buy";
import Home from "../home";
import Shop from "../buy";

function NewRouter(){
    return (
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/shop" element={ <Shop />} />
            <Route path="/buy" element={<Buy />} />
        </Routes>
    )

}
export default NewRouter;
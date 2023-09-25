
import { Route, Routes } from "react-router-dom";
import Log from "../page/system/log-in";
import Sign from "../page/system/sign-up"
import Buy from "../page/buy";

function NewRouter(){
    return (
        <Routes>
            <Route path="/login" element={ <Log /> } />
            <Route path="/create-account" element={ <Sign /> } />
            <Route path="/buy" element={<Buy />} />
        </Routes>
        
    )

}
export default NewRouter;
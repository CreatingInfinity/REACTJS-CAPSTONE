
import { Route, Routes } from "react-router-dom";
import Log from "../page/system/log-in";
import Sign from "../page/system/sign-up"

function NewRouter(){
    return (
        <Routes>
            <Route path="/login" element={ <Log /> } />
            <Route path="/create-account" element={ <Sign /> } />
        </Routes>
        
    )

}
export default NewRouter;
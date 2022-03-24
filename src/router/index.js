import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "../views/home";
import Update from "../views/home/update";
import Menu from "./menu";
import Add_employee from "../views/home/add_employee";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                    <Route path="/"element={<Menu/>}>
                        <Route index element={<Home />}/>
                        <Route path="/update" element={<Update/>}/>
                        <Route path="/addemployee" element={<Add_employee/>}/>
                    </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
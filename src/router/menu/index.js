import {Outlet, Link } from "react-router-dom";
function Menu(){
    return(
        <div>
            <div className="menu-section">
                <ul>
                    <li>
                        <Link to="/addemployee">Add Employee</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </div>
            <Outlet/>
        </div>
    )
}
export default Menu
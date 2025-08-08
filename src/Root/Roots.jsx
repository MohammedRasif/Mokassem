import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";

const Roots = () => {
    return (
        <div>
            <Navbar />
            <Outlet/>
          
        </div>
    );
}

export default Roots;

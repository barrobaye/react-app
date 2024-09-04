import { Outlet } from "react-router-dom";
import HeaderSecure from "./header/HeaderSecure";
import SidebarSecure from "./sidebar/SidebarSecure";
import "./LayoutSecure.css";  
 
 export default  function LayoutSecure(){
    return (
        <>
        
                <SidebarSecure>
                 </SidebarSecure>
                    <div className="overlay" id="overlay"></div>
                    <div className="content">
                            <HeaderSecure/>

                           <Outlet/>
                    </div>
                
        </>
    )
 }
import { Route, Routes } from "react-router-dom";
import LayoutSecure from "./LayouSecure";
import {ArticlePage,DashboardPage,ErrorPage}  from './export'
import LoginPage from "../../../pages/auth/LoginPage";
import ClientPages from "../../../pages/clients/ClientPages";
import DettePage from "../../../pages/dettes/DettePage";
import UserPages from "../../../pages/utilisateurs/UserPages";

export default  function SecureRouter(){
    return(
        <Routes>
        <Route  element = {<LayoutSecure/>}>
        <Route index element={<LoginPage />}/> */
                <Route path="article" element={<ArticlePage />}/>
                <Route path="client" element={<ClientPages />}/>
                <Route path="dette" element={<DettePage />}/>
                <Route path="dashboard" element={<DashboardPage />}/>
                <Route path="users" element={<UserPages />}/>
                <Route path="*" element={<ErrorPage />}/>
        </Route>
         <Route path="*" element={<ErrorPage />}/>
      
         </Routes>
    )
}
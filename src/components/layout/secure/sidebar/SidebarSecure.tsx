import { NavLink } from "react-router-dom";
import "./SidebarSecure.css";  


export default function SidebarSecure(){
    return (
        <div className="" >
        <aside id="cta-button-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen  transition-transform -translate-x-full sm:translate-x-0"  aria-label="Sidebar">
           <div className="h-full px-3 py-4 overflow-y-auto bg-gradient-to-t from-cyan-700 to-cyan-900 dark:bg-gray-800"> 
           <div className="pb-0 h-32 mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-12 w-auto"
            src="../../src/assets/Leboutiquier.png"
          />
         
        </div>
              <ul className="space-y-2 font-medium">
              <NavLink to="/boutique/dashboard" > 
                 <li>
                    <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">
                    <i className="fa-solid fa-sliders"></i>          
                                 <span className="ms-3">Dashboard</span>
                    </a>
                 </li>
               </NavLink>
               <NavLink to="/boutique/article" > 
                 <li>
                    <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">  
                      <i className="fa-solid fa-tag"></i>  
                       <span className="flex-1 ms-3 whitespace-nowrap">Articles</span>
                       <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                    </a>
                 </li>
                 </NavLink>
                 <NavLink to="/boutique/client" >
                 <li>
                      <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group"> 
                      <i className="fa-solid fa-users"></i>
                       <span className="flex-1 ms-3 whitespace-nowrap">Clients</span>
                       <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                    </a>
                 </li>
                 </NavLink>
                 <NavLink to="/boutique/dette" >
                 <li>
                    <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">    
                        <i className="fa-solid fa-hand-holding-dollar"></i>
                       <span className="flex-1 ms-3 whitespace-nowrap">Dettes</span>
                    </a>
                 </li>
                 </NavLink>
                 <li>
                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                     
                       <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                    </a>
                 </li>
                 <li>
                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                      
                       <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                    </a>
                 </li>
                 <li>
                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                       <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                          <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                          <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
                       </svg>
                       <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                    </a>
                 </li>
              </ul>
              <div id="dropdown-cta" className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900" role="alert">
                 <div className="flex items-center mb-3">
                    <span className="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
                    <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-dismiss-target="#dropdown-cta" aria-label="Close">
                       <span className="sr-only">Close</span>
                       <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                       </svg>
                    </button>
                 </div>
                 <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
                    Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
                 </p>
                 <a className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" href="#">Turn new navigation off</a>
              </div>
           </div>
        </aside>
        </div>
    )
}
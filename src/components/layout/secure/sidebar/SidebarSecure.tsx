import { NavLink } from "react-router-dom";
import "./SidebarSecure.css";  

export default function SidebarSecure() {
  return (
    <div>
      <aside id="cta-button-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gradient-to-t from-cyan-700 to-cyan-900 dark:bg-gray-800">
          <div className="pb-0 h-32 mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-12 w-auto" src="../../src/assets/Leboutiquier.png" />
          </div>
          <ul className="space-y-2  mb-2 font-medium">
            <li>
              <NavLink to="/boutique/dashboard" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">
                <i className="fa-solid fa-sliders"></i>          
                <strong className="ms-3">Dashboard</strong>
              </NavLink>
            </li>
            <li>
              <NavLink to="/boutique/article" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">
                <i className="fa-solid fa-tag"></i>  
                <strong className="flex-1 ms-3 whitespace-nowrap">Articles</strong>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/boutique/client" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">
                <i className="fa-solid fa-users"></i>
                <strong className="flex-1 ms-3 whitespace-nowrap">Clients</strong>
              </NavLink>
            </li>
            <li>
              <NavLink to="/boutique/dette" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">
                <i className="fa-solid fa-pen-to-square"></i>
                <strong className="flex-1 ms-3 whitespace-nowrap">Dettes</strong>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/boutique/dette" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">
                <i className="fa-solid fa-hand-holding-dollar"></i>
                <strong className="flex-1 ms-3 whitespace-nowrap">Demande</strong>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/boutique/users" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">
             <i className="fa-solid fa-user"></i>
                <strong className="flex-1 ms-3 whitespace-nowrap">Utilisateurs</strong>
              </NavLink>
            </li>
          </ul>
          <ul>
          <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
              </a>
            </li>
          </ul>
          <div id="dropdown-cta" className="p-4 mt-20 rounded-lg bg-blue-50 dark:bg-blue-900" role="alert">
            <div className="flex items-center mb-3">
              <span className="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
              <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-dismiss-target="#dropdown-cta" aria-label="Close">
                <span className="sr-only">Close</span>
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
  );
}

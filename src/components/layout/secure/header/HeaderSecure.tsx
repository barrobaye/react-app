
import "./HeaderSecure.css";  

export default function HeaderSecure(){
    return(
       

<header className=" flex  flex-row-reverse bg-gray-50 dark:bg-gray-900  ">
<div className="flex justify-between items-center w-full  lg:px-8">
    {/* <!-- Start coding here --> */}
    <div className="blocleft">
      <div className=" flex flex-col items-centerc p-4  md:flex-row md:space-y-0 md:space-x-4">
        <div className="w-full">
          <form className="flex items-center shadow-md dark:bg-gray-800 sm:rounded-lg">
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
             
              </div>
              <input type="text" id="simple-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" /> 
            </div>
          </form>
        </div>
        <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">      
          <div className="flex items-center w-full space-x-3 md:w-auto "> 
            <button  className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button"> 
              Filter
            </button>  
          </div> 
        </div>
    
       
      </div>
    
    
    </div> 
     <div className="flex  blocright  justify-center items-center">
                         <div className="flex items-center">
                         <img className="rounded-full w-12 h-12 mr-2" src="../../src/assets/barroprofil.jpeg"/>
                          <div >
                            <strong>Andrew Alfred</strong>
                          </div>
                         </div>
                          <button type="button" className="ml-4 text-black h-10 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Déconnexion</button>
           </div>
  </div>

</header>
    )
}
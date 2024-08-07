import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import image from "./Images/image.jpg";
import Navbar from './Navbar';


function Landing() {
 const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
 
  return (
    <div>
        {/* <button onClick={(e) => loginWithRedirect()}>Login with Redirect</button> */}
        <Navbar/>
        <div id="shinchan" className=' h-[87vh] max-md:h-[80vh]'>
            <div className=' flex flex-col items-center text-center text-white h-[80%]'>
               <div className=' text-7xl max-lg:text-6xl max-md:text-5xl max-md:font-semibold max-md:leading-[1.5] max-lg:leading-relaxed max-lg:pt-10 w-2/3 max-xl:w-10/12 font-bold leading-normal max-sm:text-4xl max-sm:leading-[1.7]'> Capture your<br/>thoughts effortlessly<br/> with Noteify
               </div>
               <div className=' text-4xl w-2/3 max-md:w-10/12 max-md:text-2xl max-md:my-5 font-light max-sm:text-xl'>your simple, intuitive note-taking app.
               </div>
               <div className='m-3 w-2/3'>
               <button className=' text-black text-3xl inline-flex items-center whitespace-nowrap select-none justify-center bg-white font-normal gap-2 rounded-3xl px-5 hover:px-8 hover:-translate-y-2 md:px-7 py-2 md:py-3  transition-all duration-500 ease-in-out' onClick={(e) => loginWithRedirect()}>Start from here</button>
               </div>
            </div>
        </div>

    </div>
  )
}

export default Landing
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
        <div id="shinchan" className=' h-screen'></div>

    </div>
  )
}

export default Landing
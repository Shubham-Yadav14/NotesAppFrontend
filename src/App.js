import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NotesPage from "./components/NotesPage";
import "./App.css";
import Landing2 from "./components/Landing2";
import Narrow from "./components/Common/Narrow";
import Navbar from "./components/Common/Navbar";

const App = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <div className="App">
      {!isAuthenticated && (
        <>
          <button onClick={(e) => loginWithRedirect()}>Login with Redirect</button>
          <Narrow>
            <Navbar />
            <Landing2 />
          </Narrow>
        </>
      )}
      {isAuthenticated && (
        <>
          <NotesPage />
        </>
      )}
    </div>
  );
};

export default App;

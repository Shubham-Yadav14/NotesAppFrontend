import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NotesPage from "./components/NotesPage";
import "./App.css"

const App = () => {

  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <div className="App">
      {!isAuthenticated && (
        <button onClick={(e) => loginWithRedirect()}>Login with Redirect</button>
      )}
      {isAuthenticated && (
        <>
          <NotesPage/>
        </>
      )}
    </div>
  );
};

export default App;

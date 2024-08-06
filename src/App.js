import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Landing from "./components/Landing";
import NotesPage from "./components/NotesPage";
import "./App.css"

const App = () => {

  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <div className="App">
      {!isAuthenticated && (
        <Landing/>
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

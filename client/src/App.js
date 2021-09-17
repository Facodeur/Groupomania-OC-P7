import { useEffect, useState } from "react";
import { UidContext } from "./context/UidContext";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
import useAuth from "./hooks/useAuth";

const App = () => {
  const user = useAuth();
  
console.log("--------", user)

  return (
    <UidContext.Provider value={user}>
      <Navbar />
      <Routes />
    </UidContext.Provider>
  );
};

export default App;

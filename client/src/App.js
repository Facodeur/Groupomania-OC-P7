import { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import Navbar from "./components/Navbar";
import Routes from "./Routes";

const App = () => {
  
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <>
      <Navbar />
      <Routes />
    </>
  );
};

export default App;

import { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import Navbar from "./components/Navbar";
import Routes from "./Routes";

const App = () => {
  useEffect(() => {
    let sideNav = document.querySelector("#slide-out");
    M.Sidenav.init(sideNav, {});
  });

  return (
    <>
      <Navbar />
      <Routes />
    </>
  );
};

export default App;

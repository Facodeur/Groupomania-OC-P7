import { UserContext } from "./context/UserContext";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
import useAuth from "./hooks/useAuth";
import { useMemo, useState } from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { authUser, setLoadingUser } = useAuth();

  const value = useMemo( () => (
    { authUser, setLoadingUser }
    ),[authUser, setLoadingUser]
  );

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <UserContext.Provider value={value}>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Routes />
    </UserContext.Provider>
  );
};

export default App;

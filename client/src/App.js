import { UserContext } from "./context/UserContext";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
import useAuth from "./hooks/useAuth";
import { useMemo } from "react";

const App = () => {
  const { authUser, setLoadingUser } = useAuth();

  const value = useMemo( () => (
    { authUser, setLoadingUser }
    ),[authUser, setLoadingUser]
  );

  return (
    <UserContext.Provider value={value}>
      <Navbar />
      <Routes />
    </UserContext.Provider>
  );
};

export default App;

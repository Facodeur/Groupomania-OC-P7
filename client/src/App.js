import { UserContext } from "./context/UserContext";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
import useAuth from "./hooks/useAuth";

const App = () => {
  const user = useAuth();
  
console.log("--------", user)

  return (
    <UserContext.Provider value={ user }>
      <Navbar />
      <Routes />
    </UserContext.Provider>
  );
};

export default App;
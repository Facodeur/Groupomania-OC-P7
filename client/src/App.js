import { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
import { UidContext } from "./context/UidContext";
import axios from "axios";

const App = () => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    M.AutoInit();
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/api/user/profile`,
        withCredentials: true,
      }).then((res) => {
        console.log(res);
        setUid(res.data);
      }).catch(err => console.log(err))
    };
    fetchToken();
  }, []);

  return (
    <UidContext.Provider value={uid}>
      <Navbar />
      <Routes />
    </UidContext.Provider>
  );
};

export default App;

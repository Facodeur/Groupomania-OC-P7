import { useState, useEffect } from 'react'
import axios from "axios";


const useAuth = () => {
  const [authUser, setAuth] = useState(null);
  const [loadingUser, setLoadingUser] = useState(false);

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/api/user/profile`,
        withCredentials: true,
      }).then((res) => {
        if(res)
          setAuth(res.data);
      }).catch(err => console.log(err.message))
    };
    fetchToken();

    return () => setLoadingUser(false);

  }, [loadingUser])

  return { authUser, setLoadingUser};
}

export default useAuth

import { useState, useEffect } from 'react'
import axios from "axios";


const useAuth = () => {
  const [authUser, setAuth] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/api/user/profile`,
        withCredentials: true,
      }).then((res) => {
        setAuth(res.data);
      }).catch(err => console.log(err.message))
    };
    fetchToken();
  }, [])

  return authUser;
}

export default useAuth

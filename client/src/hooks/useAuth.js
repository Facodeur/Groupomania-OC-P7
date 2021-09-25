import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "../actions/user.actions";
import { getUsers } from "../actions/users.action";

const useAuth = () => {
  const [authUser, setAuthUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/api/user/jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          if (res) setAuthUser(res.data);
        })
        .catch((err) => console.log("catch", err.message));
    };
    if (authUser === null) {
      fetchToken();
    }
    if (authUser) {
      dispatch(getUser());
      dispatch(getUsers());
    }

    return () => setLoadingUser(false);
    
  }, [loadingUser, authUser, dispatch]);

  return { authUser, setAuthUser, setLoadingUser };
};

export default useAuth;

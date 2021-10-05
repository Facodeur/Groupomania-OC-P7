import axios from "axios";

const authService = {
  signin(email, password) {
    return axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
  },

  signup(username, email, password) {
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/user/register`,
      withCredentials: true,
      data: {
        username,
        email,
        password,
      },
    });
  },
  
}

export default authService;


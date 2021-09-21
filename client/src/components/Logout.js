import React from 'react'
import axios from "axios"
import cookie from "js-cookie";
import styled from "styled-components";
import { AiOutlineLogout } from "react-icons/ai"

const Logout = ({ className }) => {

  const removeCookie = (key) => {
    if(window !== undefined) {
      cookie.remove(key, { expires: 1 });
    }
  }

  const logout = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/api/user/logout`,
      withCredentials: true
    })
    .then(() => removeCookie("jwt"))
    .catch((err) => console.log(err))
    window.location = "/";
  }

  return (
    <>
      <button className={className} onClick={logout}>
        <AiOutlineLogout />
      </button>
    </>
  )
}

export default styled(Logout)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #EA2027;
  width: 40px;
  height: 40px;
  background: none;
  outline: none;
  font-size: 1.7rem;
  border-radius: 50px;
  border-style: none;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #EA2027;
    color: #fff;
  }
`

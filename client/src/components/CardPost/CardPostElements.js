import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #15cdfc;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 500px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Icon = styled(FaUserCircle)`
  width: 30px;
  height: 30px;
  color: #000;
  margin-right: 10px;
`

export const Username = styled.h3`
  font-size: 1rem;
`

export const DatePosted = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
`